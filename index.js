import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT  || 4000;
app.use(express.json());               
app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}))

let movies = [
    {
        "id":1,
        "title": "Munjya",
        "year": 2024,
        "rank": 15,
        "rankChange": "+11",
        "rating": 67,
        "imdbRating": 6.5,
        "imdbVotes": "21k",
        "backdropImage": "https://images.justwatch.com/backdrop/317639257/s1440/munjha.webp/munjha.webp",
        "postereImage": "https://images.justwatch.com/poster/319882477/s166/munjha",
        "durection": "2h3min",
        "highestRank": 1,
        "top10Days": 97,
        "top100Days": 114,
        "top1000Days": 121,
        "likes": 135,
        "dislike": 48,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },

    {
        "id":2,
        "title": "kill",
        "year": 2024,
        "rank": 4,
        "rankChange": "+7",
        "rating": 86,
        "imdbRating": 7.6,
        "imdbVotes": "29k",
        "backdropImage": "https://images.justwatch.com/backdrop/320515994/s1440/kill-2024.webp/kill-2024.webp",
        "postereImage": "https://images.justwatch.com/poster/317138629/s166/kill-2024.webp",
        "durection": "1h45min",
        "highestRank": 1,
        "top10Days": 87,
        "top100Days": 95,
        "top1000Days": 101,
        "likes": 271,
        "dislike": 31,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":3,
        "title": "Stree 2: Sarkate Ka Aatank",
        "year": 2024,
        "rank": 3,
        "rankChange": "+10",
        "rating": 80,
        "imdbRating": 7.4,
        "imdbVotes": "27k",
        "backdropImage": "https://images.justwatch.com/backdrop/319090905/s1440/stree-2.webp/stree-2.webp",
        "postereImage": "https://images.justwatch.com/poster/321157288/s166/stree-2.webp",
        "durection": "2h27min",
        "highestRank": 2,
        "top10Days": 90,
        "top100Days": 102,
        "top1000Days": 137,
        "likes": 187,
        "dislike": 33,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":4,
        "title": "Thangalaan",
        "year": 2024,
        "rank": 1,
        "rankChange": "+4",
        "rating": 72,
        "imdbRating": 7.2,
        "imdbVotes": "4.4k",
        "backdropImage": "https://images.justwatch.com/backdrop/319827592/s1440/thangalaan.webp/thangalaan.webp",
        "postereImage": "https://images.justwatch.com/poster/319795140/s166/thangalaan.webp",
        "durection": "2h36min",
        "highestRank": 2,
        "top10Days": 87,
        "top100Days": 94,
        "top1000Days": 100,
        "likes": 204,
        "dislike": 28,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":5,
        "title": "Tumbaad",
        "year": 2018,
        "rank": 1,
        "rankChange": "+4",
        "rating": 72,
        "imdbRating": 7.2,
        "imdbVotes": "4.4k",
        "backdropImage": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/tumbbad-et00079092-1726221741.jpg",
        "postereImage": "https://images.justwatch.com/poster/295547653/s166/.webp",
        "durection": "2h36min",
        "highestRank": 2,
        "top10Days": 87,
        "top100Days": 94,
        "top1000Days": 100,
        "likes": 204,
        "dislike": 28,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":6,
        "title": "Kalki 2898-AD",
        "year": 2024,
        "rank": 33,
        "rankChange": "+16",
        "rating": 63,
        "imdbRating": 7.5,
        "imdbVotes": "24k",
        "backdropImage": "https://images.justwatch.com/backdrop/319594814/s1440/project-k.webp/project-k.webp",
        "postereImage": "https://images.justwatch.com/poster/318017051/s166/project-k.webp",
        "durection": "2h56min",
        "highestRank": 1,
        "top10Days": 79,
        "top100Days": 110,
        "top1000Days": 142,
        "likes": 341,
        "dislike": 170,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":7,
        "title": "Raayan",
        "year": 2024,
        "rank": 186,
        "rankChange": "-75",
        "rating": 55,
        "imdbRating": 6.5,
        "imdbVotes": "8.4k",
        "backdropImage": "https://images.justwatch.com/backdrop/319476194/s1440/raayan.webp/raayan.webp",
        "postereImage": "https://images.justwatch.com/poster/319733535/s166/raayan.webp",
        "durection": "2h25min",
        "highestRank": 2,
        "top10Days": 13,
        "top100Days": 55,
        "top1000Days": 72,
        "likes": 66,
        "dislike": 36,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":8,
        "title": "Maharaja",
        "year": 2024,
        "rank": 51,
        "rankChange": "+78",
        "rating": 76,
        "imdbRating": 8.5,
        "imdbVotes": "48k",
        "backdropImage": "https://images.justwatch.com/backdrop/318728320/s1440/maharaja-2024.webp/maharaja-2024.webp",
        "postereImage": "https://images.justwatch.com/poster/319725378/s166/maharaja-2024.webp",
        "durection": "2h21min",
        "highestRank": 1,
        "top10Days": 41,
        "top100Days": 108,
        "top1000Days": 114,
        "likes": 455,
        "dislike": 114,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    {
        "id":9,
        "title": "Aavesham",
        "year": 2024,
        "rank": 34,
        "rankChange": "+39",
        "rating": 82,
        "imdbRating": 7.8,
        "imdbVotes": "21k",
        "backdropImage": "https://images.justwatch.com/backdrop/313630178/s1440/aavesham-2024.webp/aavesham-2024.webp",
        "postereImage": "https://images.justwatch.com/poster/318152051/s166/aavesham-2024.webp",
        "durection": "2h38min",
        "highestRank": 1,
        "top10Days": 68,
        "top100Days": 160,
        "top1000Days": 177,
        "likes": 288,
        "dislike": 48,
        "watchlistText": "watchlist",
        "seenText": "seen",
        "syncText": "sing in to watch list" 
    },
    

                //web series


        {
            "id":1,
            "title": "Lucifer",
            "year": 2016,
            "rank": 384,
            "rankChange": "▲ +64",
            "rating": 91,
            "imdbRating": 8.1,
            "imdbVotes": "364k",
            "backdropImage": "https://images.justwatch.com/backdrop/8621909/s1440/lucifer.webp/lucifer.webp",
            "posterImage": "https://images.justwatch.com/poster/15007440/s166/lucifer.webp",
            "duration": "58min",
            "highestRank": 1,
            "top10Days": 157,
            "top100Days": 2176,
            "top1000Days": 3172,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "18k",
            "dislikes": "1.6k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "X4bF_quwNtw",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 13,
                "posterImage": "https://images.justwatch.com/poster/256495379/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 18,
                "posterImage": "https://images.justwatch.com/poster/256495445/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 26,
                "posterImage": "https://images.justwatch.com/poster/256495450/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes": 10,
                "posterImage": "https://images.justwatch.com/poster/127860861/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/256495449/s166/season-5.webp"
              },
        
              {
                "seasonNumber": 6,
                "episodes": 10,
                "posterImage": "https://images.justwatch.com/poster/256495457/s166/season-6.webp"
              },
            ]
          },


    {
            "id":2,
            "title": "The Walking Dead",
            "year": 2010,
            "rank": 94,
            "rankChange": "▲ +4",
            "rating": 86,
            "imdbRating": 8.1,
            "imdbVotes": "1m",
            "backdropImage": "https://images.justwatch.com/backdrop/86305926/s1440/the-walking-dead.webp/the-walking-dead.webp",
            "posterImage": "https://images.justwatch.com/poster/140225063/s166/the-walking-dead.webp",
            "duration": "46min",
            "highestRank": 1,
            "top10Days": 547,
            "top100Days": 2393,
            "top1000Days": 3205,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "29k",
            "dislikes": "4.4k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "sfAc2U20uyg",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/306348297/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 13,
                "posterImage": "https://images.justwatch.com/poster/306348306/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348314/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348331/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306304089/s166/season-5.webp"
              },
        
              {
                "seasonNumber": 6,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/140225063/s166/the-walking-dead.webp"
              },

              {
                "seasonNumber": 7,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348427/s166/season-7.webp"
              },

              {
                "seasonNumber": 8,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/27657865/s166/season-8.webp"
              },

              {
                "seasonNumber": 9,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348482/s166/season-9.webp"
              },

              {
                "seasonNumber": 10,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348465/s166/season-10.webp"
              },

              {
                "seasonNumber": 11,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/306348518/s166/season-11.webp"
              },
            ]
          },


   
          {
            "id":3,
            "title": "The Aam Aadmi Family",
            "year": 2016,
            "rank": 1818,
            "rankChange": "▲ +1397",
            "rating": 90,
            "imdbRating": 8.4,
            "imdbVotes": "2.3k",
            "backdropImage": "https://images.justwatch.com/backdrop/159518713/s1440/the-aam-aadmi-family.webp/the-aam-aadmi-family.webp",
            "posterImage": "https://images.justwatch.com/poster/309759520/s166/the-aam-aadmi-family.webp",
            "duration": "30min",
            "highestRank": 64,
            "top10Days": 0,
            "top100Days": 3,
            "top1000Days": 331,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "8k",
            "dislikes": "1k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "3ec6KQbJ-us",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 5,
                "posterImage": "https://images.justwatch.com/poster/309759520/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 7,
                "posterImage": "https://images.justwatch.com/poster/309759520/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 5,
                "posterImage": "https://images.justwatch.com/poster/309759520/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":8,
                "posterImage": "https://images.justwatch.com/poster/309759520/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 1,
                "posterImage": "https://images.justwatch.com/poster/309759520/s166/season-5.webp"
              }, 
            ]
          },


           {
            "id":4,
            "title": "Breaking Bad",
            "year": 2008,
            "rank": 111,
            "rankChange": "▲ +6",
            "rating": 97,
            "imdbRating": 9.5,
            "imdbVotes": "2m",
            "backdropImage": "https://images.justwatch.com/backdrop/178169781/s1440/breaking-bad.webp/breaking-bad.webp",
            "posterImage": "https://images.justwatch.com/poster/110511366/s166/breaking-bad.webp",
            "duration": "47min",
            "highestRank": 4,
            "top10Days": 75,
            "top100Days": 2537,
            "top1000Days": 3205,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "72k",
            "dislikes": "2.3k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "1JLUn2DFW4w",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 7,
                "posterImage": "https://images.justwatch.com/poster/8594434/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 13,
                "posterImage": "https://images.justwatch.com/poster/8594406/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 13,
                "posterImage": "https://images.justwatch.com/poster/301572468/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":13,
                "posterImage": "https://images.justwatch.com/poster/8594372/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/8594362/s166/season-5.webp"
              }, 
            ]
          },

   
          {
            "id":5,
            "title": "Peaky Blinders",
            "year": 2013,
            "rank": 138,
            "rankChange": "▲ +49",
            "rating": 95,
            "imdbRating": 8.8,
            "imdbVotes": "675k",
            "backdropImage": "https://images.justwatch.com/backdrop/178308142/s1440/peaky-blinders.webp/peaky-blinders.webp",
            "posterImage": "https://images.justwatch.com/poster/265096894/s166/peaky-blinders.webp",
            "duration": "58min",
            "highestRank": 2,
            "top10Days": 63,
            "top100Days": 1631,
            "top1000Days": 3193,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "39k",
            "dislikes": "2k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "1JLUn2DFW4w",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/195479700/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/195470848/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/195470821/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":6,
                "posterImage": "https://images.justwatch.com/poster/195470692/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/252100318/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/265096894/s166/season-6.webp"
              }, 
            ]
          },


          {
            "id":6,
            "title": "Supernatural",
            "year": 2005,
            "rank": 123,
            "rankChange": "▲ +1",
            "rating": 90,
            "imdbRating": 8.4,
            "imdbVotes": "495k",
            "backdropImage": "https://images.justwatch.com/backdrop/8604625/s1440/supernatural.webp/supernatural.webp",
            "posterImage": "https://images.justwatch.com/poster/152810828/s166/supernatural.webp",
            "duration": "45min",
            "highestRank": 2,
            "top10Days": 104,
            "top100Days": 1823,
            "top1000Days": 3205,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "14k",
            "dislikes": "1.4k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "1JLUn2DFW4w",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/86311580/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/86311568/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 16,
                "posterImage": "https://images.justwatch.com/poster/170937379/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":22,
                "posterImage": "https://images.justwatch.com/poster/86311545/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/86311496/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/170937327/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 9,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/170937211/s166/season-9.webp"
              }, 

              {
                "seasonNumber": 10,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/86311406/s166/season-10.webp"
              }, 

              {
                "seasonNumber": 11,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/86311386/s166/season-11.webp"
              }, 

              {
                "seasonNumber": 12,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/86311364/s166/season-12.webp"
              }, 

              {
                "seasonNumber": 13,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/86311344/s166/season-13.webp"
              }, 

              {
                "seasonNumber": 14,
                "episodes": 20,
                "posterImage": "https://images.justwatch.com/poster/86311777/s166/season-14.webp"
              }, 

              {
                "seasonNumber": 15,
                "episodes": 20,
                "posterImage": "https://images.justwatch.com/poster/256744176/s166/season-15.webp"
              }, 
            ]
          },


          {
            "id":7,
            "title": "Friends",
            "year": 1994,
            "rank": 114,
            "rankChange": "▲ +33",
            "rating": 92,
            "imdbRating": 8.9,
            "imdbVotes": "1m",
            "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
            "posterImage": "https://images.justwatch.com/poster/300603462/s166/friends.webp",
            "duration": "25min",
            "highestRank": 1,
            "top10Days": 869,
            "top100Days": 2582,
            "top1000Days": 3200,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "35k",
            "dislikes": "2.9k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "a8mgLuqUae4",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238614572/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238614566/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 25,
                "posterImage": "https://images.justwatch.com/poster/238614557/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":24,
                "posterImage": "https://images.justwatch.com/poster/238614546/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238614540/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 25,
                "posterImage": "https://images.justwatch.com/poster/300603462/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238614521/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/304855085/s166/season-8.webp"
              }, 

              {
                "seasonNumber": 9,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238614510/s166/season-9.webp"
              }, 

              {
                "seasonNumber": 10,
                "episodes": 18,
                "posterImage": "https://images.justwatch.com/poster/252095774/s166/season-10.webp"
              }, 
            ]
          },


   
          {
            "id":8,
            "title": "The Office ",
            "year": 2005,
            "rank": 100,
            "rankChange": "▲ +12",
            "rating": 94,
            "imdbRating": 9.0,
            "imdbVotes": "739k",
            "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
            "posterImage": "https://images.justwatch.com/poster/300603462/s166/friends.webp",
            "duration": "24min",
            "highestRank": 2,
            "top10Days": 20,
            "top100Days": 2127,
            "top1000Days": 3040,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "37k",
            "dislikes": "2.5k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "CZZrFC2MFAw",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 6,
                "posterImage": "https://images.justwatch.com/poster/245581596/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/238556208/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/245581579/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":14,
                "posterImage": "https://images.justwatch.com/poster/238555997/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 26,
                "posterImage": "https://images.justwatch.com/poster/238555958/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 26,
                "posterImage": "https://images.justwatch.com/poster/245582099/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238555894/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 24,
                "posterImage": "https://images.justwatch.com/poster/238555860/s166/season-8.webp"
              }, 

              {
                "seasonNumber": 9,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/8603758/s166/season-9.webp"
              }, 

            ]
          },


  
          {
            "id":9,
            "title": "The Blacklist ",
            "year": 2013,
            "rank": 243,
            "rankChange": "▲ +45",
            "rating": 90,
            "imdbRating": 7.9,
            "imdbVotes": "284k",
            "backdropImage": "https://images.justwatch.com/backdrop/222822775/s1440/the-blacklist.webp/the-blacklist.webp",
            "posterImage": "https://images.justwatch.com/poster/259437978/s166/the-blacklist.webp",
            "duration": "43min",
            "highestRank": 1,
            "top10Days": 53,
            "top100Days": 1912,
            "top1000Days": 3205,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "16k",
            "dislikes": "1.7k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "z-cTuId0rYs",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/94672126/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/176028087/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/237677062/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":22,
                "posterImage": "https://images.justwatch.com/poster/35297513/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/35297510/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885938/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885939/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885943/s166/season-8.webp"
              }, 

              {
                "seasonNumber": 9,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885942/s166/season-9.webp"
              }, 

              {
                "seasonNumber": 10,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/302759152/s166/season-10.webp"
              }, 
            ]
          },


          {
            "id":10,
            "title": "Arrow ",
            "year": 2012,
            "rank": 378,
            "rankChange": "▲ +20",
            "rating": 86,
            "imdbRating": 7.5,
            "imdbVotes": "449k",
            "backdropImage": "https://images.justwatch.com/backdrop/306143455/s1440/arrow.webp/arrow.webp",
            "posterImage": "https://images.justwatch.com/poster/150304764/s166/arrow.webp",
            "duration": "42min",
            "highestRank": 1,
            "top10Days": 430,
            "top100Days": 1694,
            "top1000Days": 3190,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "7.4k",
            "dislikes": "1.1k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "z-cTuId0rYs",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/94672126/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/176028087/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 23,
                "posterImage": "https://images.justwatch.com/poster/237677062/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":22,
                "posterImage": "https://images.justwatch.com/poster/35297513/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/35297510/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885938/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885939/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885943/s166/season-8.webp"
              }, 

              {
                "seasonNumber": 9,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/265885942/s166/season-9.webp"
              }, 

              {
                "seasonNumber": 10,
                "episodes": 22,
                "posterImage": "https://images.justwatch.com/poster/302759152/s166/season-10.webp"
              }, 
            ]
          },

          
          {
            "id":11,
            "title": "The Vampire Diaries ",
            "year": 2009,
            "rank": 297,
            "rankChange": "▲ -60",
            "rating": 88,
            "imdbRating": 7.7,
            "imdbVotes": "357k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/304426822/s1440/the-vampire-diaries.webp/the-vampire-diaries.webp",
            "posterImage": "https://www.justwatch.com/images/poster/176980285/s166/the-vampire-diaries.webp",
            "duration": "42min",
            "highestRank": 1,
            "top10Days": 314,
            "top100Days": 2184,
            "top1000Days": 3206,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "11k",
            "dislikes": "1.5k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "BmVmhjjkN4E",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/306881094/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426818/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426794/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":23,
                "posterImage": "https://www.justwatch.com/images/poster/244131423/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426767/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426770/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304378345/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/304378500/s166/season-8.webp"
              }, 
            ]
          },


             
          {
            "id":12,
            "title": "The Vampire Diaries ",
            "year": 2009,
            "rank": 322,
            "rankChange": "▲ -206",
            "rating": 88,
            "imdbRating": 7.7,
            "imdbVotes": "357k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/304426822/s1440/the-vampire-diaries.webp/the-vampire-diaries.webp",
            "posterImage": "https://www.justwatch.com/images/poster/176980285/s166/the-vampire-diaries.webp",
            "duration": "42min",
            "highestRank": 1,
            "top10Days": 314,
            "top100Days": 2184,
            "top1000Days": 3206,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "11k",
            "dislikes": "1.5k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "BmVmhjjkN4E",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/306881094/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426818/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426794/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":23,
                "posterImage": "https://www.justwatch.com/images/poster/244131423/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426767/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304426770/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/304378345/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/304378500/s166/season-8.webp"
              }, 
            ]
          },


          
          {
            "id":13,
            "title": "Suits",
            "year": 2011,
            "rank": 202,
            "rankChange": "▲ -38",
            "rating": 94,
            "imdbRating": 8.4,
            "imdbVotes": "496k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/321356732/s1440/suits.webp/suits.webp",
            "posterImage": "https://www.justwatch.com/images/poster/137485374/s166/suits.webp",
            "duration": "44min",
            "highestRank": 1,
            "top10Days": 222,
            "top100Days": 1974,
            "top1000Days": 3208,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "19k",
            "dislikes": "1.2k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "xJFHo-MOHh0",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/305715218/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/301854713/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/301854718/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":16,
                "posterImage": "https://www.justwatch.com/images/poster/301854719/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/301854721/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/301854723/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/16068616/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/301854726/s166/season-8.webp"
              },{
                "seasonNumber": 9,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/301854729/s166/season-9.webp"
              },  
            ]
          },


          {
            "id":14,
            "title": "Shameless",
            "year": 2011,
            "rank": 136,
            "rankChange": "▲ +119",
            "rating": 91,
            "imdbRating": 8.5,
            "imdbVotes": "298k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/32163879/s1440/shameless.webp/shameless.webp",
            "posterImage": "https://www.justwatch.com/images/poster/239608831/s166/shameless.webp",
            "duration": "54min",
            "highestRank": 1,
            "top10Days": 81,
            "top100Days": 1673,
            "top1000Days": 3208,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "13k",
            "dislikes": "1.1k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "9tvkYS5cA58",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584375/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584370/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584366/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":12,
                "posterImage": "https://www.justwatch.com/images/poster/8584365/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584364/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584359/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/8584357/s166/season-7.webp"
              }, 

              {
                "seasonNumber": 8,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/24209402/s166/season-8.webp"
              },
              
              {
                "seasonNumber": 9,
                "episodes": 14,
                "posterImage": "https://www.justwatch.com/images/poster/74149258/s166/season-9.webp"
              },  

              {
                "seasonNumber": 10,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/150741261/s166/season-10.webp"
              },

              {
                "seasonNumber": 11,
                "episodes": 12,
                "posterImage": "https://www.justwatch.com/images/poster/239608831/s166/season-11.webp"
              },
            ]
          },

          
          {
            "id":15,
            "title": "The Crown",
            "year": 2016,
            "rank": 422,
            "rankChange": "▲ +179",
            "rating": 95,
            "imdbRating": 8.6,
            "imdbVotes": "263k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/312644945/s1440/the-crown.webp/the-crown.webp",
            "posterImage": "https://www.justwatch.com/images/poster/309155365/s166/the-crown.webp",
            "duration": "55min",
            "highestRank": 1,
            "top10Days": 13,
            "top100Days": 506,
            "top1000Days": 2879,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "22k",
            "dislikes": "1.2k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "JWtnJjn6ng0",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/12277205/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/174870469/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/153908421/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":10,
                "posterImage": "https://www.justwatch.com/images/poster/238620274/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/301583791/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/309157139/s166/season-6.webp"
              }, 
            ]
          },


            
          {
            "id":16,
            "title": "Grey's Anatomy",
            "year": 2005,
            "rank": 97,
            "rankChange": "▲ +14",
            "rating": 82,
            "imdbRating": 7.6,
            "imdbVotes": "350k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/498862/s1440/greys-anatomy.webp/greys-anatomy.webp",
            "posterImage": "https://www.justwatch.com/images/poster/316037080/s166/greys-anatomy.webp",
            "duration": "48min",
            "highestRank": 1,
            "top10Days": 863,
            "top100Days": 2507,
            "top1000Days": 3208,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "17k",
            "dislikes": "3.5k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "q1pcpgREQ5c",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 9,
                "posterImage": "https://www.justwatch.com/images/poster/34534034/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 27,
                "posterImage": "https://www.justwatch.com/images/poster/34534026/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 25,
                "posterImage": "https://www.justwatch.com/images/poster/34534016/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":17,
                "posterImage": "https://www.justwatch.com/images/poster/34534330/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/34534320/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/34534313/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/34534298/s166/season-7.webp"
              },
        
              {
                "seasonNumber": 8,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/34534292/s166/season-8.webp"
              },
        
              {
                "seasonNumber": 9,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/304423423/s166/season-9.webp"
              },
        
              {
                "seasonNumber": 10,
                "episodes":24,
                "posterImage": "https://www.justwatch.com/images/poster/34534212/s166/season-10.webp"
              },
        
              {
                "seasonNumber": 11,
                "episodes": 25,
                "posterImage": "https://www.justwatch.com/images/poster/316040160/s166/season-11.webp"
              }, 

              {
                "seasonNumber": 12,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/34534193/s166/season-12.webp"
              },

              {
                "seasonNumber": 13,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/316040184/s166/season-13.webp"
              },
        
              {
                "seasonNumber": 14,
                "episodes": 24,
                "posterImage": "https://www.justwatch.com/images/poster/316040197/s166/season-14.webp"
              },
        
              {
                "seasonNumber": 15,
                "episodes": 25,
                "posterImage": "https://www.justwatch.com/images/poster/316040204/s166/season-15.webp"
              },
        
              {
                "seasonNumber": 16,
                "episodes":21,
                "posterImage": "https://www.justwatch.com/images/poster/149593926/s166/season-16.webp"
              },
        
              {
                "seasonNumber": 17,
                "episodes": 17,
                "posterImage": "https://www.justwatch.com/images/poster/237675887/s166/season-17.webp"
              }, 

              {
                "seasonNumber": 18,
                "episodes": 20,
                "posterImage": "https://www.justwatch.com/images/poster/262232784/s166/season-18.webp"
              },

              {
                "seasonNumber": 19,
                "episodes":20,
                "posterImage": "https://www.justwatch.com/images/poster/316040416/s166/season-19.webp"
              },
        
              {
                "seasonNumber": 20,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/313478471/s166/season-20.webp"
              }, 

              {
                "seasonNumber": 21,
                "episodes": 18,
                "posterImage": "https://www.justwatch.com/images/poster/320954853/s166/season-21.webp"
              },
            ]
          },

          
            
          {
            "id":17,
            "title": "Supernatural",
            "year": 2005,
            "rank": 74,
            "rankChange": "▲ -22",
            "rating": 90,
            "imdbRating": 8.4,
            "imdbVotes": "495k",
            "backdropImage": "https://www.justwatch.com/images/backdrop/8604625/s1440/supernatural.webp/supernatural.webp",
            "posterImage": "https://www.justwatch.com/images/poster/152810828/s166/supernatural.webp",
            "duration": "45min",
            "highestRank": 2,
            "top10Days": 104,
            "top100Days": 1825,
            "top1000Days": 3208,
            "watchOptions": [
              {"platform": "Netflix", "price": "Rs200/-"},
              {"platform": "Amazon Prime", "price": "Rs500/-"}
            ],
            "likes": "14k",
            "dislikes": "1.4k",
            "watchlistText": "Watchlist",
            "seenText": "Seen",
            "syncText": "Sign in to Sync Watchlist",
            "videoId": "eL3ulBENltc",
            "type" : "series",
            "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/86311580/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/86311568/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 16,
                "posterImage": "https://www.justwatch.com/images/poster/170937379/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes":22,
                "posterImage": "https://www.justwatch.com/images/poster/86311545/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/86311496/s166/season-5.webp"
              }, 

              {
                "seasonNumber": 6,
                "episodes": 22,
                "posterImage": "https://www.justwatch.com/images/poster/170937327/s166/season-6.webp"
              }, 

              {
                "seasonNumber": 7,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/170937264/s166/season-7.webp"
              },
        
              {
                "seasonNumber": 8,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/170937235/s166/season-8.webp"
              },
        
              {
                "seasonNumber": 9,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/170937211/s166/season-9.webp"
              },
        
              {
                "seasonNumber": 10,
                "episodes":24,
                "posterImage": "https://www.justwatch.com/images/poster/86311406/s166/season-10.webp"
              },
        
              {
                "seasonNumber": 11,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/86311386/s166/season-11.webp"
              }, 

              {
                "seasonNumber": 12,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/86311364/s166/season-12.webp"
              },

              {
                "seasonNumber": 13,
                "episodes": 23,
                "posterImage": "https://www.justwatch.com/images/poster/86311344/s166/season-13.webp"
              },
        
              {
                "seasonNumber": 14,
                "episodes": 20,
                "posterImage": "https://www.justwatch.com/images/poster/86311777/s166/season-14.webp"
              },
        
              {
                "seasonNumber": 15,
                "episodes": 20,
                "posterImage": "https://www.justwatch.com/images/poster/256744176/s166/season-15.webp"
              },
            ]
          },
]


app.get('/api/movies', (req, res)=>{
    const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;

    if(titleQuery){
        const movieByTitle = movies.find(movie => movie.title.toLowerCase() === titleQuery);
        if(movieByTitle){
            return res.json(movieByTitle)
        }
        else{
            return res.status(404).json({message: "movies not found"})
        }
    }
    else{
        res.json(movies);
    }

    
})


app.get('/api/movies/:id', (req, res)=>{
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === parseInt(id));
    if(!movie){
        return res.status(404).json({message: "movies not found by id"})
    }
    res.json(movie);
})

// for a creating a data  
app.post('/api/movies', (req, res)=>{
    const newMovies = {...req.body, id: movies.length + 1}
    movies.push(movies)
    res.status(201).json(newMovies)
})

app.listen(PORT, ()=>{
    console.log(`surver is running on ${PORT}`)
})