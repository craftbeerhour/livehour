
/* {
  "created_at" : "Tue Nov 03 20:12:30 +0000 2015",
  "entities" : {
    "hashtags" : [ {
      "indices" : [ 101, 115 ],
      "text" : "CraftBeerHour"
    } ],
    "user_mentions" : [ {
      "id" : 16721886,
      "id_str" : "16721886",
      "indices" : [ 0, 12 ],
      "name" : "Dogfish Head Brewery",
      "screen_name" : "dogfishbeer"
    }, {
      "id" : 2833836316,
      "id_str" : "2833836316",
      "indices" : [ 13, 27 ],
      "name" : "Tom #CraftBeerHour",
      "screen_name" : "CraftBeerHour"
    }, {
      "id" : 396536784,
      "id_str" : "396536784",
      "indices" : [ 28, 35 ],
      "name" : "Bod",
      "screen_name" : "Tribod"
    }, {
      "id" : 20697677,
      "id_str" : "20697677",
      "indices" : [ 36, 46 ],
      "name" : "Gaz.",
      "screen_name" : "gazzaboyo"
    } ]
  },
  "favorite_count" : 0,
  "favorited" : false,
  "filter_level" : "low",
  "id" : 661637094390022100,
  "id_str" : "661637094390022144",
  "in_reply_to_screen_name" : "thegreatcubbio",
  "in_reply_to_status_id" : 661631871026073600,
  "in_reply_to_status_id_str" : "661631871026073601",
  "in_reply_to_user_id" : 197006335,
  "in_reply_to_user_id_str" : "197006335",
  "is_quote_status" : false,
  "lang" : "en",
  "retweet_count" : 0,
  "retweeted" : false,
  "source" : "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
  "text" : "@dogfishbeer @CraftBeerHour @Tribod @gazzaboyo  and the winner is.....to be revealed after the break #CraftBeerHour",
  "timestamp_ms" : "1446581550582",
  "truncated" : false,
  "user" : {
    "contributors_enabled" : false,
    "created_at" : "Thu Sep 30 12:45:17 +0000 2010",
    "default_profile" : true,
    "default_profile_image" : false,
    "description" : "#RUFC #CAMRGB moans a lot but usually with good reason. Veg grower. Homebrewer @rockhopperbrew",
    "favourites_count" : 205,
    "followers_count" : 334,
    "friends_count" : 891,
    "geo_enabled" : true,
    "id" : 197006335,
    "id_str" : "197006335",
    "is_translator" : false,
    "lang" : "en",
    "listed_count" : 3,
    "location" : "Greetland, W Yorks",
    "name" : "Phil Kyte",
    "profile_background_color" : "C0DEED",
    "profile_background_image_url" : "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https" : "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile" : false,
    "profile_banner_url" : "https://pbs.twimg.com/profile_banners/197006335/1366148770",
    "profile_image_url" : "http://pbs.twimg.com/profile_images/2370927413/image_normal.jpg",
    "profile_image_url_https" : "https://pbs.twimg.com/profile_images/2370927413/image_normal.jpg",
    "profile_link_color" : "0084B4",
    "profile_sidebar_border_color" : "C0DEED",
    "profile_sidebar_fill_color" : "DDEEF6",
    "profile_text_color" : "333333",
    "profile_use_background_image" : true,
    "protected" : false,
    "screen_name" : "thegreatcubbio",
    "statuses_count" : 4383,
    "verified" : false
  }
};*/

import React from 'react';

class Tweet extends React.Component {
    
    contructor(props) {
        this.state = this.setInitState(props);
    }
    
    setInitState(props) {
        //get test props
        
        //todo: start on building tweet item...
    }
    
    getMockState() {
        
        return {
            text: "@dogfishbeer @CraftBeerHour @Tribod @gazzaboyo  and the winner is.....to be revealed after the break #CraftBeerHour",
            created_at: "Tue Nov 03 20:12:30 +0000 2015",
            user: {
                id: 123456,
                name: "John Doe",
                screen_name: "johnnyD"
            },
            favorite_count: 6,
            is_retweet: false,
            user_mentions: [{
                id: 12345,
                indices: [36, 46],
                name: "Gaz",
                screen_name: "gazzaboyo"
            }]
        };
    }
    
    render() {
        return (
            <li>
                <div class="timeline-badge"></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <p>
                            <small class="text-muted">{this.state.timeFromTweet} <i class="glyphicon glyphicon-time"></i></small>
                        </p>
                    </div>
                    <div class="timeline-body">
                        <p>{this.state.tweetText}</p>
                        <b>{this.state.tweetUser}</b>
                    </div>
                </div>
            <li>);
    }
}

export default Tweet;