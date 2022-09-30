# OnlyGoodDogo's App

This app will let you pick your dog breed and will fetch back a random dogo image of that breed 🐶

**Link to project:** https://onlydogs.netlify.app

![alt text](https://github.com/akhilsatish2008/OnlyGoodDogos/blob/main/img/screenshot.png)

## How It's Made:

**Tech used:** ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)

Using a fetch in the client-side js, I was able to get Json objects back from the https://dog.ceo/dog-api/. I used the endpoints they gave me to query specific dog breeds and get all the relevent data. With this data I created a pulldown window with all the different dog breeds which can be used to pick the breed. This then loads a random picture of that dog breed for your enjoyment.
## Optimizations
Some optimizations I have to do are, putting the fetch on server side so there is no clientside fetch, then I need to optimize my mobile layout and change the styling since the yellow bg is not the best visually !

## Lessons Learned:

I learned from this how we can use the params given from an api to look up the specific data type we need from the client side! 
