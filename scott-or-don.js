var trumpOrScottArr = [[
    "In order to get hotter, you take the glasses off. you're moving in the wrong direction",
    "Sometimes i'll start a sentence and i don't even know where it's going",
    "Occassionally, i'll hit somebody with my car",
    "My mind is going a mile an hour",
    "I...declare...bankruptcy",
    "Welcome back, jerky jerk face",
    "It's a good thing russia doesn't exist any more",
    "I will literally kill you and your entire family",
    "And you know what's gonna be on your tombstone? 'loser'.",
    "There is no such thing as an appropriate joker, that's why it's a joke",
    "You have no idea how high I can fly",
    "Is there something besides 'Mexican' you prefer to be called? Something less offensive?",
    "I was never in this for the money. But it turns out that the money was an absolute necessity for me.",
    "People always talk about triumphs of the human spirit. Well, today, I had a triumph of the human body. That's why everybody was applauding for me at the end, my guts and my heart.",
    "The hero got the girl. Who saw that coming? I did.",
    "This is an environment of welcoming, and you should just get the hell out of here. ",
    "I don't know how George Bush did it when Colin Powell left. ",
    "I have written these things because it is my responsibility ... to profiligate great ideas.",
    "You call your friends retards when they're acting retarded",
    "My God, if you're wearing a dress, please keep your knees together, nobody wants to see that. ",
    "Everybody likes new inventions, new technology. People will never be replaced by machines. In the end, life and business are about human connections.",
    "A little cover-up on your Adam's apple will make it appear smaller, which will make you look less like a transvestite.",
    "Pizza. Great equalizer. Rich people love pizza. Poor people love pizza. White people love pizza. Black people love pizza.",
    "If we come across somebody with no arms or legs, do we bother resuscitating them?",
    "The most sacred thing I do is care and provide for my workers, my family.",
    "Any man who says he totally understands women is a fool. Because they are un-understandable.",
    "I set the rules, and you follow them blindly, okay? And if you have a problem with that, then you can talk to our complaint department. It's a trashcan.",
    "I don't know what I'm grabbing here!",
    "Negotiation is an art. Back and forth. Give and take.",
    "Why would you date an amateur when you can date a professional?",
    "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever.",
    "I have to say that I'm so impressed with the potential that you see in me.",
    "Don't think a woman can be a man? Well, then that's your stereotype, not mine.",
    "Is that what we're going for now, just OK? We used to go for pretty good.",
    "He is a good guy, not a terrorist."
],
[
    "Usually if I fire somebody who's bad, I'll tell them how great they are. Because I don't want to hurt people's feelings.",
    "I promise not to talk about your massive plastic surgeries that didn't work.",
    "You know, wealthy people don't like me.",
    "I could be happy living in a studio apartment.",
    "I have a great relationship with the blacks.",
    "I don't even consider myself ambitious.",
    "Money is a little bit of a scorecard, but I don't do it for the money.",
    "Bing bing, bong bong, bing bing bing",
    "I'm not a huge fan of Japan, but I love their custom.",
    "You know, it doesn't really matter ... as long as you've got a young and beautiful piece of ass.",
    "With the proper woman you don't need Viagra",
    "It's very important that people aspire to be successful. The only way you can do it is if you look at somebody who is.",
    "I mean, leadership is a very strange word because, you know, some people have it, some people don't and nobody knows why.",
    "It's my opinion that to a large extent, Mike Tyson was railroaded in this case.",
    "I've won many club championships and I was always the best athlete.",
    "I have never seen a thin person drinking Diet Coke.",
    "The concept of shaking hands is absolutely terrible, and statistically I've been proven right.",
    "Sometimes your best investments are the ones you don't make.",
    "Sometimes by losing a battle you find a new way to win the war.",
    "I don't like losers.",
    "It's always good to be underestimated."
]];

var trumpFailGifArr = [
    "trump_christie.gif",
    "trump_head_shake.gif",
    "trump_hold_up.gif",
    "trump_surprise.gif",
    "trump_wrong.gif"
];

var michaelFailGifArr = [
    "michael_dead_inside.gif",
    "michael_hate_it.gif",
    "michael_just_stinks.gif",
    "michael_no.gif",
    "michael_not_ok.gif",
    "michael_run_away.gif",
    "michael_seriously.gif",
    "michael_the_worst.gif"
];

var trumpWinGifArr = [
    "var trumpWinGifArr = [",
    "trump_beautiful.gif",
    "trump_clap.gif",
    "trump_correct.gif",
    "trump_wat.gif",
    "trump_you_got_it.gif"
];

var michaelWinGifArr = [
    "michael_all_good.gif",
    "michael_best_boss.gif",
    "michael_dance.gif",
    "michael_love_me.gif",
    "michael_not_moron.gif",
    "michael_ty.gif"
];

var zeeAnswer = "";
var linkLock = false;

function trumpOrScott() {
    if(Math.random() < .5) {
        var quote = trumpOrScottArr[0][Math.floor(Math.random() * trumpOrScottArr[0].length)];
        return ["Michael Scott", quote];
    } else {
        var quote = trumpOrScottArr[1][Math.floor(Math.random() * trumpOrScottArr[1].length)];
        return ["Donald Trump", quote];
    }
}

function getGif(wrong) {
    var returnGif = "images/";
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

    $("#scott-or-trump").html(currentQuote[1]);
}

function updateZeeAnswer(wrong) {
    var answerGif = getGif(wrong);
    if (wrong === true) {
        $("#answer").html("<div class='label label-danger'><span class='glyphicon glyphicon-remove'></span> Incorrect</div><br><br><img src='" + answerGif + "'><br>Sad...");
    } else {
        $("#answer").html("<div class='label label-success'><span class='glyphicon glyphicon-ok'></span> Correct!</div><br><br><img src='" + answerGif + "'><br>Nice...");
    }
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
    $("#go-again").css('display', 'block');
}

$(document).ready(function() {
    updateQuote();

    $("#choose-scott").click(function(e) {
        execAnswer("Michael Scott");
    });

    $("#choose-trump").click(function(e) {
        execAnswer("Donald Trump");
    });

    $("#reset-choice").click(function(e) {
        $("#choose-scott").addClass("btn-info");
        $("#choose-trump").addClass("btn-danger");
        $("#choose-scott").removeClass("btn-default");
        $("#choose-trump").removeClass("btn-default");
        $("#go-again").css('display', 'none');
        linkLock = false;

        $("#answer").empty();

        updateQuote();
    });
});
