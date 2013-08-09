var recipes = [
{
	name: "Trademark Recipe",
	author: "Submitty, McLawyerton",
	views: 10,
	id: 1,
	steps: [
		{ step: 1, 
			desc: "Start with search engines -- Once you have brainstormed a name you like, start with a basic Google or Bing search to see what else may already be out there with a similar name.  This can help you uncover obvious potential conflicts that may cause you to pursue a different name.", 
			time: "20 min" },
		{ step: 2, 
			desc: "Explore domain names – Using a safe, known domain registrar’s look up tool, explore whether there is already a similar business in your country who already controls the '.com' or other domain names.  This, again, can help you determine whether your chosen name is already owned as a trademark by someone else.", 
			time: "15 min" },
		{ step: 3, 
			desc: "Explore your state’s LLC or other corporate name registry – Most states have an easily searchable database of corporate/LLC names.  This can give you a sense for whether there are other companies in your state or region who may already have adopted a similar name.", 
			time: "20 min", divider: true }
	],
	total_time: "55 min",
	total_cost: "Free"
},
{
	name: "How to Become a S-Corporation Recipe",
	author: "Jivan, Malathi",
	views: 1,
	id: 2,
	steps: [
		{ step: 1, 
			desc: "Download Form 2553 from IRS web site and fill out for your business. Link - http://www.irs.gov/pub/irs-pdf/f2553.pdf", 
			time: "15 min" },
		{ step: 2, 
			desc: "Mail your completed form to 'Department of the Treasury Internal Revenue Service Center, Cincinnati, OH 45999'", 
			time: "10 min", divider: true }
	],
	total_time: "25 min",
	total_cost: "Free"
},
{
	name: "How to Become a LLC Recipe",
	author: "Bar Foo",
	views: 0,
	id: 3,
	steps: [
		{ step: 1, desc: "Run preliminary check to see if the name you want is taken.", time: "5 min" },
		{ step: 2, desc: "Choose a name for your new business.", time: "30 min" },
		{ step: 3, desc: "Download LLC registration form and file the articles of organization with state form.", time: "30 min" },
		{ step: 4, desc: "Prepare an Operating Agreement form", time: "40 min", divider: true }
	],
	total_time: "1.5 hrs",
	total_cost: "Low"
}
];

module.exports = recipes;