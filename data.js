var recipes = [
{
	name: "Trademark Recipe",
	author: "Submitty, McLawyerton",
	views: 10,
	id: 1,
	steps: [
		{ step: 1, 
			desc: "Start with search engines - Once you have brainstormed a name you like, start with a basic Google or Bing search to see what else may already be out there with a similar name.  This can help you uncover obvious potential conflicts that may cause you to pursue a different name.", 
			time: "20 min" },
		{ step: 2, 
			desc: "Explore domain names – Using a safe, known domain registrar’s look up tool, explore whether there is already a similar business in your country who already controls the '.com' or other domain names.  This, again, can help you determine whether your chosen name is already owned as a trademark by someone else.", 
			time: "15 min" },
		{ step: 3, 
			desc: "Explore your state’s LLC or other corporate name registry – Most states have an easily searchable database of corporate/LLC names.  This can give you a sense for whether there are other companies in your state or region who may already have adopted a similar name.", 
			time: "20 min",
		{
			step: 4,
			desc: "Initially explore the U.S. Trademark Registry – While the U.S. Trademark Registry search process can be extremely complex and often requires deep legal expertise to produce and analyze meaningful results, you can do some initial searching – for example to uncover exact matches for identical marks that may already exist in the same marketplace in which you plan to do business.  At minimum, this can help you determine if the mark you want to use is already a registered trademark of another business that provides products or services that are competitive or somehow related to your own – or already established as a famous mark of a large company.",
			time: "It depends"
		},
		{
			step: 5,
			desc: "Obtain the right legal advice - If the name will be an important/critical element of your business strategy, you may owe it to yourself to identify and invest in a trusted legal advisor who specializes in trademark clearance.  An experienced trademark lawyer can ensure that you obtain a meaningful and extensive trademark search report, and then help you interpret that report and decide if the name you want to adopt is legally available and defensible.  Finding the right lawyer often involves referrals from trusted friends or colleagues, or a referral from a reputable lawyer referral service or local bar association.",
			time: "It depends", 
			divider: true
		}
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