$("#Scndnavbar ul li").hide;

function GID(id){
  return document.getElementById(id);
}

function css(id, type, value){
    $(id).css(type, value);
}

var w = window.innerWidth;
var h = window.innerHeight;
function alert(){
    alert("hi");
}

var click = false;
var skillId = "";
//Text about my experiences
var abotSkill = [
"JavaScript was my first language and I started teaching myself this language over a year ago. I take the initiative to learn new things about this language every time I work with it. Because it’s my first language it hold a very special place in my heart.",
"I started using HTML5 and CSS3 about the same time I started programming in JavaScript. I can make websites ranging from simple to more complex and visually appealing. I take great pride in both of these languages.",
"I started using CSS3 and HTML5 about the same time I started programming in JavaScript. I can make websites ranging from simple to more complex and visually appealing. I take great pride in both of these languages.",
"Prior to the first C++ class I took in college I had begun learning this language at my own time I quickly became familiar with the basics. During both my first and second semester of college I broadened my knowledge of this language intensively.",
"Compared to C++ and JavaScript my knowledge of Java is very rudimentary. I started teaching myself this language in order to stay ahead. I am still currently learning this language and applying the skills I learned from this language.",
"jQuery is a JavaScript framework that I learned alongside JavaScript. I can’t say I know all the techniques used in jQuery but I do know quite a bit. Just like everything I learn I continue to further my skills in this language.",
"My knowledge of PHP is tantamount my knowledge of Java. I do not yet know as much about this as I wish but again, I continue to learn and grow my knowledge of this language.",
"I like to eat and have been doing this for 18 years and counting."
];

$(".skillType").mouseenter(function(){
    //Get ID of current Skill you are hovering over.
    skillId = $(this).attr('id');
    //Get the number ID of the current skill you are hovering over.
    skillId = Number(skillId[5]);
    //Add the "aboutSkill" HTML text based on current skill you are hovering over.
    GID("aboutSkill").innerHTML = abotSkill[skillId];
    //Adjust the div
    $("#aboutSkill").css("width", "665px");
    $("#aboutSkill").css("height", "100px");
});

$(".skillType").mouseleave(function(){
    if(click === false){
        //Clear "aboutSKill" of not hovering
        GID("aboutSkill").innerHTML = "";
        $("#aboutSkill").css("width", "0");
        $("#aboutSkill").css("height", "0");
    }
});

$(".skillType").click(function(){
    skillId = $(this).attr('id');
    skillId = Number(skillId[5]);
    GID("aboutSkill").innerHTML = abotSkill[skillId]
    click = true;
    $("#aboutSkill").css("width", "665px");
    $("#aboutSkill").css("height", "100px");
});

//Animate.js function for animating specific elements.
function animate(element, animation){
    element = $(element);
    //Add a animation name "or class" to the element.
    element.addClass('animated ' + animation);        
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);         
}

//Get random number
var rand = Math.floor(Math.random()* 10) + 1;
var mouseIn = false;
$(".skillType").mouseenter(function(){
    mouseIn = true; 
    rand = Math.floor(Math.random()* 10) + 1;
    //Tilt the "skillType" div when hovering over
    $(this).css("transform", "rotateZ(" + rand + "deg)");
});

$(".skillType").mouseleave(function(){
    $(this).css("transform", "rotateZ(" - rand + "deg)");  
});


//////////////////////////Navigation///////////////////////////////////////
var leftNav = $("#leftNav");
var rightNav = $("#rightNav");
var pop = new Audio("http://www.pachd.com/sfx/pop1.wav");
var currPage = 1;
var clear = 0;

//Based on the direction given "dir" turn the page accordenly
function turnpage_(dir){
    if(dir == "left"){
        //if left remove 1 form "curpage" index
        currPage -= 1;
        //Make sure "curpage" index never goes to negative
        clear = currPage + 1;
        if(currPage <= 0){
            currPage = 5;
            clear = 1;
        }
        //Animating the arrows
        css("#nav" + currPage, "border-bottom", "5px solid #ee4b3e");
        css("#nav" + clear, "border-bottom", "0px solid #ee4b3e");
        animate(".pg" + (clear), "bounceOut");
        window.setTimeout(function(){
            //remove the old page and show the new one based on "curpage" index.
            animate(".pg" + currPage, "bounceIn");
            css(".pg" + (clear), "display", "none"); 
            css(".pg" + currPage, "display", "block");
            pop.play();
        }, 700);
    } else {
        //if right add 1 to "curpage" index
        currPage += 1; 
        clear = currPage - 1;
        if(currPage >= 6){
            currPage = 1;
            clear = 5;
        }
         //Animating the arrows
        css("#nav" + currPage, "border-bottom", "5px solid #ee4b3e");
        css("#nav" + clear, "border-bottom", "0px solid #ee4b3e");
        animate(".pg" + (clear), "bounceOut");
        window.setTimeout(function(){
            //remove the old page and show the new one based on "curpage" index.
            animate(".pg" + currPage, "bounceIn");
            css(".pg" + (clear), "display", "none"); 
            css(".pg" + currPage, "display", "block"); 
            pop.play();
        }, 700); 
    }
}

css("#nav" + 1, "border-bottom", "5px solid #ee4b3e");
css("#nav" + 1 + "_", "border-bottom", "5px solid #ee4b3e");
function get_currPage(curpage, dir){
    if(dir == "left"){
        css("#leftNav", "display", "none"); 
        curpage -= 1;
        clear = curpage + 1;
        if(curpage <= 0){
            curpage = 5;
            clear = 1;
        }
        window.setTimeout(function(){
            css("#leftNav", "display", "block"); 
        }, 1500); 
    } else {
        css("#rightNav", "display", "none");
        curpage += 1;
        clear = curpage - 1;
        if(curpage >= 6){
            curpage = 1;
            clear = 5;
        }
        window.setTimeout(function(){
            css("#righttNav", "display", "block"); 
        }, 1500); 
    }
    return curpage;
}

function animate_page(currPage_){
    css("#nav" + currPage_, "border-bottom", "5px solid #ee4b3e");
    css("#nav" + clear, "border-bottom", "0px solid #ee4b3e");

    css("#nav" + currPage_ + "_", "border-bottom", "5px solid #ee4b3e");
    css("#nav" + clear + "_", "border-bottom", "0px solid #ee4b3e");
    animate(".pg" + (clear), "bounceOut");
    window.setTimeout(function(){
        animate(".pg" + currPage_, "bounceIn");
        css(".pg" + (clear), "display", "none");
        css(".pg" + currPage_, "display", "block");
        $("#rightNav").fadeIn("slow");
        pop.play();
    }, 700);
}

leftNav.click(function(){
    animate_page(get_currPage(currPage, "left"));
    currPage = get_currPage(currPage, "left");
    //turnpage_("left");
});

rightNav.click(function(){
    animate_page(get_currPage(currPage, "right"));
    currPage = get_currPage(currPage, "right");
    //turnpage_("right");
});

function block(){
    css("#block", "display", "block"); 
     window.setTimeout(function(){
        css("#block", "display", "none"); 
    }, 700);
}

$("#nav1").click(function(){
    block();
    clear = currPage;
    animate_page(1);
    currPage = 1;
})

$("#nav2").click(function(){
    block();
    clear = currPage;
    animate_page(2);
    currPage = 2;
})

$("#nav3").click(function(){
    block();
    clear = currPage;
    animate_page(3);
    currPage = 3;
})

$("#nav4").click(function(){
    block();
    clear = currPage;
    animate_page(4);
    currPage = 4;
})

$("#nav1_").click(function(){
    block();
    clear = currPage;
    animate_page(1);
    currPage = 1;
})

$("#nav2_").click(function(){
    block();
    clear = currPage;
    animate_page(2);
    currPage = 2;
})

$("#nav3_").click(function(){
    block();
    clear = currPage;
    animate_page(3);
    currPage = 3;
})

$("#nav4_").click(function(){
    block();
    clear = currPage;
    animate_page(4);
    currPage = 4;
})

$("#nav5_").click(function(){
    block();
    clear = currPage;
    animate_page(5);
    currPage = 5;
})

/////////////////////////////////////////////////////////////////////////////

//animate underscore//
window.setInterval(function(){
    $("#underScore").css("opacity", "0");
    window.setTimeout(function(){
        $("#underScore").css("opacity", "1");
    }, 500)
}, 900)
///////////////////


var open;
$("#navContainer").mouseenter(function(){
    open = true;
    window.setTimeout(function(){
        if(open){
            $("#Scndnavbar ul li").fadeIn("slow");
        }
    }, 600);
})
$("#navContainer").mouseleave(function(){
    open = false;
    $("#Scndnavbar ul li").hide();
});
