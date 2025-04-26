const { PrismaClient } = require("@prisma/client");
const houses = require("./houses.json");
const prisma = new PrismaClient();

async function main() {
	for (const house of houses) {
		try {
			await prisma.house.upsert({
				where: { id: house.id ?? "" }, // Use ID if available, otherwise empty string (won't match anything)
				update: { updatedAt: new Date() }, // Ensure there's a valid update operation
				create: {
					...house,
					images: {
						create: house.images || [], // Ensure images exist before creating
					},
				},
			});
			console.log(`Seeded house: ${house.description}`);
		} catch (error) {
			console.error("Error inserting house:", error);
		}
	}
}

main()
	.then(async () => {
		console.log("Seeding completed.");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error("Seeding failed:", e);
		await prisma.$disconnect();
		process.exit(1);
	});
