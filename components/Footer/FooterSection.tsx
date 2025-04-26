import Link from "next/link";
type footerLinkProps = {
	href: string;
	text: string;
};

type sectionProps = {
	title: string;
	links: footerLinkProps[];
};

export default function FooterSection({ title, links }: sectionProps) {
	return (
		<div className='text-center sm:text-left'>
			<p className='text-lg font-medium'>{title}</p>
			<ul className='mt-8 space-y-4 text-sm'>
				{links.map((item) => (
					<li key={crypto.randomUUID()}>
						<Link
							className='text-muted-foreground hover:text-primary'
							href={item.href}>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
