const FAQ = () => {
	return (
		<section className="container flex flex-col gap-5">
			<h1 className=" leading-tight text-3xl font-extrabold text-center">
				Frequently asked questions
			</h1>
			<div className="*:max-w-[43.438rem] flex justify-center items-center flex-col">
				<div className="collapse collapse-arrow border-b ">
					<input type="checkbox" name="my-accordion-2" defaultChecked />
					<div className="collapse-title text-xl font-medium max-sm:text-base">
						Can I use FlowBite in open-source projects?
					</div>
					<div className="collapse-content">
						<p>
							Landwind is an open-source library of interactive components built
							on top of Tailwind CSS including buttons, dropdowns, modals,
							navbars, and more.
						</p>
						<p>
							Check out this guide to learn how to get started and start
							developing websites even faster with components on top of Tailwind
							CSS.
						</p>
					</div>
				</div>
				<div className="collapse collapse-arrow  border-b">
					<input type="checkbox" name="my-accordion-2" />
					<div className="collapse-title text-xl font-medium max-sm:text-base">
						Where can I access my download files?
					</div>
					<div className="collapse-content">
						<p>Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
					</div>
				</div>
				<div className="collapse collapse-arrow border-b">
					<input type="checkbox" name="my-accordion-2" />
					<div className="collapse-title text-xl font-medium max-sm:text-base">
						Can I use FlowBite for commercial purposes?
					</div>
					<div className="collapse-content">
						<p>The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
					</div>
				</div>
				<div className="collapse collapse-arrow border-b">
					<input type="checkbox" name="my-accordion-2" />
					<div className="collapse-title text-xl font-medium max-sm:text-base">
						What about browser support?
					</div>
					<div className="collapse-content">
						<p>
							The main difference is that the core components from Landwind are
							open source under the MIT license, whereas Tailwind UI is a paid
							product. Another difference is that Landwind relies on smaller and
							standalone components, whereas Tailwind UI offers sections of
							pages.
						</p>
						<p>
							However, we actually recommend using both Landwind, Landwind Pro,
							and even Tailwind UI as there is no technical reason stopping you
							from using the best of two worlds.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
