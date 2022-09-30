# OnlyGoodDogo's App
This app let's you search the type of alchol that you want to drink and show's a list of cocktails, instructions and ingrediants.

**Link to project:** https://onlydogs.netlify.app



## How It's Made:

**Tech used:** ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)

Using a fetch in the client-side js, I was able to get Json objects back from the https://www.thecocktaildb.com. I used the endpoints they gave me to query specific dink types and get all the relevent data. With this data I built a simple search on the client side that will query all drinks based on the alchol type🍸
## Optimizations
Some optimizations I have to do are, putting the fetch on server side so there is no clientside fetch, then I need to optimize my styling as most of it was just put together to see whether the logic was working or not.

## Lessons Learned:

It was amazing to see how we can fetch data from web api's into the client-side without much effort at all. I m especially thankful for all the developers who are maintaining these free api's. The main takeaway's I learned from this is how to manipulate data coming from a fetch,  how to query specific data and finally how to display that data on the dom.
