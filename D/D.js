window.addEventListener('load',()=>{
    let time =document.getElementById('time');
    time.innerText = "Loading..."

    let hr =Number(prompt('hr'));
    let mn =Number(prompt('mn'));
    let sc =Number(prompt('sc'));

    let H;  
    let M;
    let S;

    let allTime = hr*60*60+mn*60+sc;

    function syncDelay(milliseconds){
        var start = new Date().getTime();
        var end=0;
        while( (end-start) < milliseconds){
            end = new Date().getTime();
        }
    }

    let set = function(){
        allTime -= 1;
        S = allTime;
        H=0;
        M=0;
        if(S>=60){
            while(S>=60){
                M++;
                S= S-60;
            }
        }
        if(M>=60){
            while(M>=60){
                H++;
                M= M-60;
            }
        }
        time.innerText=`${H}:${M}:${S}`;
    }

    function ani(){
        syncDelay(1000);
        set();
        if(H<=0&&M<=0&&S<=0)return;
        requestAnimationFrame(ani);
    }
    ani();
    time.innerText="Time's up!";
})