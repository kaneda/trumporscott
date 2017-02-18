var trumpOrScottArr = [
    [ "That's what America is built on. Big ideas. Blue jeans. The Grand Canyon.", "Michael Scott", "Season 7 - Episode 10", 1 ],
    [ "This year, more people will use cocaine than read a book to their children.", "Michael Scott", "Season 2 - Episode 20", 2 ],
    [ "Sometimes it makes financial sense to lose money. Like for tax purposes.", "Michael Scott", "Season 6 - Episode 21", 3 ],
    [ "You just don't care about the information.", "Michael Scott", "Season 5 – Episode 17", 4 ],
    [ "Negotiations are all about controlling things. About being in the driver's seat. And make one tiny mistake, you're dead.", "Michael Scott", "Season 3 - Episode 18", 5 ],
    [ "I've made some empty promises in my life, but hands down, that was the most generous.", "Michael Scott", "Season 6 - Episode 12", 6 ],
    [ "In order to get hotter, you take the glasses off. you're moving in the wrong direction", "Michael Scott", "Season 4 - Episode 12", 7 ],
    [ "Sometimes I'll start a sentence and I don't even know where it's going", "Michael Scott", "Season 5 - Episode 11", 8 ],
    [ "Occassionally, I'll hit somebody with my car", "Michael Scott", "Season 4 - Episode 01", 9 ],
    [ "My mind is going a mile an hour", "Michael Scott", "Season 6 - Episode 24", 10 ],
    [ "I...declare...bankruptcy", "Michael Scott", "Season 4 - Episode 04", 11 ],
    [ "It's a good thing russia doesn't exist any more", "Michael Scott", "Season 6 - Episode 12", 12 ],
    [ "I will literally kill you and your entire family", "Michael Scott", "Season 7 - Episode 08", 13 ],
    [ "And you know what's gonna be on your tombstone? 'Loser'.", "Michael Scott", "Season 7 - Episode 12", 14 ],
    [ "There is no such thing as an appropriate joke, that's why it's a joke", "Michael Scott", "Season 2 - Episode 02", 15 ],
    [ "You have no idea how high I can fly", "Michael Scott", "Season 5 - Episode 18", 16 ],
    [ "Is there something besides 'Mexican' you prefer to be called? Something less offensive?", "Michael Scott", "Season 1 - Episode 02", 17 ],
    [ "I was never in this for the money. But it turns out that the money was an absolute necessity for me.", "Michael Scott", "Season 4 - Episode 04", 18 ],
    [ "People always talk about triumphs of the human spirit. Well, today, I had a triumph of the human body. That's why everybody was applauding for me at the end, my guts and my heart.", "Michael Scott", "Season 4 - Episode 01", 19 ],
    [ "The hero got the girl. Who saw that coming? I did.", "Michael Scott", "Season 2 - Episode 22", 20 ],
    [ "This is an environment of welcoming, and you should just get the hell out of here.", "Michael Scott", "Season 1 - Episode 02", 21 ],
    [ "I don't know how George Bush did it when Colin Powell left.", "Michael Scott", "Season 4 - Episode 06", 22 ],
    [ "I have written these things because it is my responsibility ... to profiligate great ideas.", "Michael Scott", "Season 5 - Episode 17", 23 ],
    [ "You call your friends retards when they're acting retarded", "Michael Scott", "Season 3 - Episode 01", 24 ],
    [ "My God, if you're wearing a dress, please keep your knees together, nobody wants to see that.", "Michael Scott", "Season 5 - Episode 13", 25 ],
    [ "Everybody likes new inventions, new technology. People will never be replaced by machines. In the end, life and business are about human connections.", "Michael Scott", "Season 4 - Episode 02", 26 ],
    [ "A little cover-up on your Adam's apple will make it appear smaller, which will make you look less like a transvestite.", "Michael Scott", "Season 7 - Episode 21", 27 ],
    [ "Pizza. Great equalizer. Rich people love pizza. Poor people love pizza. White people love pizza. Black people love pizza.", "Michael Scott", "Season 2 - Episode 15", 28 ],
    [ "If we come across somebody with no arms or legs, do we bother resuscitating them?", "Michael Scott", "Season 5 - Episode 13", 29 ],
    [ "The most sacred thing I do is care and provide for my workers, my family.", "Michael Scott", "Season 1 - Episode 03", 30 ],
    [ "Any man who says he totally understands women is a fool. Because they are un-understandable.", "Michael Scott", "Season 3 - Episode 21", 31 ],
    [ "I set the rules, and you follow them blindly, okay? And if you have a problem with that, then you can talk to our complaint department. It's a trashcan.", "Michael Scott", "Season 5 - Episode 24", 32 ],
    [ "I don't know what I'm grabbing here!", "Michael Scott", "Season 3 - Episode 08", 33 ],
    [ "Negotiation is an art. Back and forth. Give and take.", "Michael Scott", "Season 3 - Episode 18", 34 ],
    [ "Why would you date an amateur when you can date a professional?", "Michael Scott", "Season 6 - Episode 07", 35 ],
    [ "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever.", "Michael Scott", "Season 5 - Episode 11", 36 ],
    [ "I have to say that I'm so impressed with the potential that you see in me.", "Michael Scott", "Season 5 - Episode 11", 37 ],
    [ "Don't think a woman can be a man? Well, then that's your stereotype, not mine.", "Michael Scott", "Season 5 - Episode 20", 38 ],
    [ "Is that what we're going for now, just OK? We used to go for pretty good.", "Michael Scott", "Season 6 - Episode 11", 39 ],
    [ "He is a good guy, not a terrorist.", "Michael Scott", "Season 2 - Episode 09", 40 ],
    [ "Usually if I fire somebody who's bad, I'll tell them how great they are. Because I don't want to hurt people's feelings.", "Donald Trump", "Larry King Live (2005)", 41 ],
    [ "I promise not to talk about your massive plastic surgeries that didn't work.", "Donald Trump", "Twitter (2012)", 42 ],
    [ "You know, wealthy people don't like me.", "Donald Trump", "Breitbart (2015)", 43 ],
    [ "I could be happy living in a studio apartment.", "Donald Trump", "Playboy (1990)", 44 ],
    [ "I have a great relationship with the blacks.", "Donald Trump", "Talk1300 (2011)", 45 ],
    [ "I don't even consider myself ambitious.", "Donald Trump", "60 Minutes (1985)", 46 ],
    [ "Money is a little bit of a scorecard, but I don't do it for the money.", "Donald Trump", "Late Edition with Wolf Blitzer (2004)", 47 ],
    [ "Bing bing, bong bong, bing bing bing", "Donald Trump", "Birch Run Speech (2015)", 48 ],
    [ "I'm not a huge fan of Japan, but I love their custom.", "Donald Trump", "Larry King Live (2005)", 49 ],
    [ "You know, it doesn't really matter ... as long as you've got a young and beautiful piece of ass.", "Donald Trump", "Esquire (1991)", 50 ],
    [ "If you need Viagra, you're probably with the wrong girl", "Donald Trump", "Playboy (2004)", 51 ],
    [ "It's very important that people aspire to be successful. The only way you can do it is if you look at somebody who is.", "Donald Trump", "Playboy (1990)", 52 ],
    [ "I mean, leadership is a very strange word because, you know, some people have it, some people don't and nobody knows why.", "Donald Trump", "Larry King Live (1999)", 53 ],
    [ "It's my opinion that to a large extent, Mike Tyson was railroaded in this case.", "Donald Trump", "NBC News (1992)", 54 ],
    [ "I've won many club championships and I was always the best athlete.", "Donald Trump", "Washington Post (2016)", 55 ],
    [ "I have never seen a thin person drinking Diet Coke.", "Donald Trump", "Twitter (2012)", 56 ],
    [ "The concept of shaking hands is absolutely terrible, and statistically I've been proven right.", "Donald Trump", "Playboy (2004)", 57 ],
    [ "Sometimes your best investments are the ones you don't make.", "Donald Trump", "Twitter (2013)", 58 ],
    [ "Sometimes by losing a battle you find a new way to win the war.", "Donald Trump", "Twitter (2014)", 59 ],
    [ "I don't like losers.", "Donald Trump", "About War Hero John McCain, Family Leadership Summit (2015)", 60 ],
    [ "It's always good to be underestimated.", "Donald Trump", "NO SOURCE FOUND", 61 ],
    [ "The only kind of people I want counting my money are little short guys that wear yarmulkes every day.", "Donald Trump", "Rolling Stone (2016)", 62 ],
    [ "Robert Pattinson should not take back Kristen Stewart.", "Donald Trump", "Twitter (2012)", 63 ],
    [ "It's freezing and snowing in New York. We need global warming!", "Donald Trump", "Twitter (2012)", 64 ],
    [ "The point is, you can never be too greedy.", "Donald Trump", "The Art of the Deal (1987)", 65 ],
    [ "I have so many fabulous friends who happen to be gay", "Donald Trump", "New York Times (2011)", 66 ],
    [ "Number one, I have great respect for women. I was the one that really broke the glass ceiling on behalf of women", "Donald Trump", "With Bill O'Reilly on Fox News (2016)", 67 ],
    [ "Success appears to happen overnight because we all see stories in newspapers and on TV about previously unknown people who have suddenly become famous. But consider a sequoia tree that has been growing for several hundred years. Just because a television crew one day decides to do a story about that tree doesn't mean it didn't exist before.", "Donald Trump", "How to Get Rich (2004)", 68 ],
    [ "We're becoming a drug-infested nation. Drugs are becoming cheaper than candy bars.", "Donald Trump", "Press Conference (2017)", 69 ],
    [ "Nuclear holocaust would be like no other.", "Donald Trump", "Press Conference (2017)", 70 ],
    [ "Russia is fake news.", "Donald Trump", "Press Conference (2017)", 71 ],
    [ "I must say that I never get phone calls from the media.", "Donald Trump", "Press Conference (2017)", 72 ],
    [ "I'm not ranting and raving. I'm just telling you, you're dishonest people.", "Donald Trump", "Press Conference (2017)", 73 ],
    [ "Lots of things are done with uranium, including some bad things.", "Donald Trump", "Press Conference (2017)", 74 ],
    [ "I am the least anti-Semitic person that you've ever seen in your entire life. Number two, racism, the least racist person.", "Donald Trump", "Press Conference (2017)", 75 ]
];

// Thanks http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var trumpFailGifArr = [
    "trump_christie.gif",
    "trump_head_shake.gif",
    "trump_hold_up.gif",
    "trump_surprise.gif",
    "trump_wrong.gif",
    "trump_shrug.gif",
    "trump_not_a_chance.gif",
    "trump_your_fired.gif"
];

var michaelFailGifArr = [
    "michael_dead_inside.gif",
    "michael_hate_it.gif",
    "michael_just_stinks.gif",
    "michael_no.gif",
    "michael_not_ok.gif",
    "michael_run_away.gif",
    "michael_seriously.gif",
    "michael_the_worst.gif",
    "michael_seppuku.gif",
    "michael_smash_your_face.gif",
    "michael_christmas_cancelled.gif"
];

var trumpWinGifArr = [
    "trump_beautiful.gif",
    "trump_clap.gif",
    "trump_correct.gif",
    "trump_wat.gif",
    "trump_you_got_it.gif",
    "trump_yeah.gif",
    "trump_ladies.gif",
    "trump_thumbs_up.gif"
];

var michaelWinGifArr = [
    "michael_all_good.gif",
    "michael_best_boss.gif",
    "michael_dance.gif",
    "michael_love_me.gif",
    "michael_not_moron.gif",
    "michael_ty.gif",
    "michael_blessed.gif",
    "michael_in_yo_face.gif"
];

var originalQuoteArray = JSON.parse(JSON.stringify(trumpOrScottArr));
var select15Array;
var zeeAnswer = "";
var currentSource = "";
var currentId = 0;
var linkLock = false;
var numRight = 0;
var numWrong = 0;
var initialSize = trumpOrScottArr.length;
var qNum = 0;

function trumpOrScott() {
    var index = Math.floor(Math.random() * select15Array.length);
    var quote = select15Array[index];
    select15Array.splice(index, 1);
    return [quote[1], quote[0], quote[2], quote[3]];
}

function getResults(win) {
    $.ajax({
        type: "POST",
        url: "http://jbegleiter.com/trumpstats/" + currentId,
        data: {'right': win},
        success: function(d) {
            if (d.hasOwnProperty('question_response') && d.question_response.length > 0) {
                $("#right-stats").html("Right answers: " + d.question_response[0].num_right);
                $("#wrong-stats").html("Wrong answers: " + d.question_response[0].num_wrong);
                $("#answer-stats").css("display", "block");
            }
        },
        dataType: "json"
    });
}

function getGif(wrong) {
    var returnGif = "images/";
    getResults(!wrong);
    if (wrong === true) {
        returnGif = returnGif + "fail/";
        if (zeeAnswer === "Michael Scott") {
            returnGif = returnGif + "michael/" + michaelFailGifArr[Math.floor(Math.random() * michaelFailGifArr.length)];
        } else {
            returnGif = returnGif + "trump/" + trumpFailGifArr[Math.floor(Math.random() * trumpFailGifArr.length)];
        }
    } else {
        returnGif = returnGif + "win/";
        if (zeeAnswer === "Michael Scott") {
            returnGif = returnGif + "michael/" + michaelWinGifArr[Math.floor(Math.random() * michaelWinGifArr.length)];
        } else {
            returnGif = returnGif + "trump/" + trumpWinGifArr[Math.floor(Math.random() * trumpWinGifArr.length)];
        }
    }

    return returnGif;
}

function updateQuote() {
    var currentQuote = trumpOrScott();
    zeeAnswer = currentQuote[0];
    currentSource = currentQuote[2];
    currentId = currentQuote[3];

    $("#scott-or-trump").html(currentQuote[1]);
}

function updateScore() {
    $("#num-wrong").html("Incorrect: " + numWrong);
    $("#num-right").html("Correct: " + numRight);
}

function incrQNum() {
    qNum += 1;
    $("#q-num").html(qNum + " / " + initialSize);
}

function updateZeeAnswer(wrong) {
    var answerGif = getGif(wrong);
    if (wrong === true) {
        numWrong += 1;
        $("#answer").html("<div class='label label-danger'><span class='glyphicon glyphicon-remove'></span> Incorrect</div><br><br><img class='mobile-img' src='" + answerGif + "'><br>Sad...");
    } else {
        numRight += 1;
        $("#answer").html("<div class='label label-success'><span class='glyphicon glyphicon-ok'></span> Correct!</div><br><br><img class='mobile-img' src='" + answerGif + "'><br>Nice...");
    }

    updateScore();
}

function execAnswer(personaNonGrata) {
    if (linkLock === true) { return; }
    updateZeeAnswer(zeeAnswer !== personaNonGrata);
    lockNRetry();
}

function lockNRetry() {
    linkLock = true;
    $("#choose-scott").removeClass("btn-info");
    $("#choose-trump").removeClass("btn-danger");
    $("#choose-scott").addClass("btn-default");
    $("#choose-trump").addClass("btn-default");

    $("#quote-source").html("Source: " + currentSource);
    $("#quote-source").css('display', 'block');

    if (select15Array.length === 0) {
        $("#final-right").html("You got " + numRight + " correct");
        $("#final-wrong").html("You got " + numWrong + " incorrect");
        $("#final-results").css('display', 'block');
    } else {
        $(".go-again").css('display', 'block');
    }
    $("html, body").animate({ scrollTop: $(document).height() - 750 }, "slow");
}

function resetQuote() {
    $("#choose-scott").addClass("btn-info");
    $("#choose-trump").addClass("btn-danger");
    $("#choose-scott").removeClass("btn-default");
    $("#choose-trump").removeClass("btn-default");
    $(".go-again").css('display', 'none');
    linkLock = false;

    $("#answer").empty();
    $("#quote-source").css('display', 'none');

    updateQuote();
    incrQNum();
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function shuffleStart() {
    trumpOrScottArr = shuffle(trumpOrScottArr);
    select15Array = trumpOrScottArr.slice(0, 15);
    initialSize = select15Array.length;
    qNum = 0;
}

$(document).ready(function() {

    shuffleStart();

    updateQuote();

    $("#choose-scott").click(function(e) {
        e.preventDefault();
        execAnswer("Michael Scott");
    });

    $("#choose-trump").click(function(e) {
        e.preventDefault();
        execAnswer("Donald Trump");
    });

    $(".reset-choice").click(function(e) {
        e.preventDefault();
        resetQuote();
    });

    $("#reset-all").click(function(e) {
        e.preventDefault();
        $("#final-results").css('display', 'none');
        trumpOrScottArr = JSON.parse(JSON.stringify(originalQuoteArray))
        shuffleStart();
        resetQuote();
    });

    incrQNum();
});
