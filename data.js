var recipes = [
{
	name: "Trademark Recipe",
	author: "Foo Bar",
	views: 10,
	id: 1,
	steps: [
		{ step: 1, 
			desc: "Start with search engines -- Once you have brainstormed a name you like, start with a basic Google or Bing search to see what else may already be out there with a similar name.  This can help you uncover obvious potential conflicts that may cause you to pursue a different name.", 
			time: "20 min", cost: "FREE" },
		{ step: 2, 
			desc: "Explore domain names – Using a safe, known domain registrar’s look up tool, explore whether there is already a similar business in your country who already controls the '.com' or other domain names.  This, again, can help you determine whether your chosen name is already owned as a trademark by someone else.", 
			time: "15 min", cost: "FREE" },
		{ step: 3, 
			desc: "Explore your state’s LLC or other corporate name registry – Most states have an easily searchable database of corporate/LLC names.  This can give you a sense for whether there are other companies in your state or region who may already have adopted a similar name.", 
			time: "20 min", cost: "FREE", divider: true }
	],
	total_time: "55 min",
	total_cost: "Low"
},
{
	name: "Business Plan Recipe",
	author: "Bar Foo",
	views: 0,
	id: 2,
	steps: [
		{ step: 1, desc: "aaaaaa", time: "20 min", cost: "10" },
		{ step: 2, desc: "bbbbbb", time: "30 min", cost: "FREE" },
		{ step: 3, desc: "cccccc", time: "40 min", cost: "25" , divider: true }
	],
	total_time: "45 min",
	total_cost: "Low"
}
];

module.exports = recipes;