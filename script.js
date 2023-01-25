// hex to rgb converter
function hexToRgb(hex) {
    let work = hex;
    let a = work[0] + work[1];
    let b = work[2] + work[3];
    let c = work[4] + work[5];

    let r = parseInt(a, 16);
    let g = parseInt(b, 16);
    let bl = parseInt(c, 16);

    let out = (r.toString() + " " + g.toString() + " " + bl.toString())
    document.getElementById('hexCOut').innerText = out

}


function hexConvbtn() {
    let hexIn = document.querySelector("#hexCInp");
    let val = hexIn.value
    hexToRgb(val)
}

function hexconverter() {
    let r = document.getElementById('RCInput').value;
    let g = document.getElementById('GCInput').value;
    let b = document.getElementById('BCInput').value;

    let final = "#" + changeHex(r) + changeHex(g) + changeHex(b);

    document.getElementById('rgbCOut').innerText = final

}

function changeHex(rgb) {
    let hexi = Number(rgb).toString(16);
    if (hexi.length < 2) {
        hexi = "0" + hexi;
    } return hexi
}




function rgbConvbtn() {
    hexconverter()
}


const randonColor = () => {
    let rand = "0123456789ABCDEF"
    let con = "#";
    for (let i = 0; i < 6; i++) {
        con = con + rand[Math.floor(Math.random() * 16)];
    } return con
}


function randompickerbtn() {
    document.getElementById("randomPicker").style.backgroundColor = randonColor()
    document.getElementById("randomValuePara").innerText = randonColor()
}

function hexFindbtn() {
    let he = document.getElementById('hexInput').value
    document.getElementById('color-box').style.backgroundColor = he
}




function RGBFindbtn() {
    let r = document.getElementById('RInput').value;
    let g = document.getElementById('GInput').value;
    let b = document.getElementById('BInput').value;

    let final = "#" + changeHex(r) + changeHex(g) + changeHex(b);
    document.getElementById('rgb-color-box').style.backgroundColor = final

}

function RangeSelector() {
    let r = document.getElementById('RrInput').value;
    let g = document.getElementById('GrInput').value;
    let b = document.getElementById('BrInput').value;

    let final = "#" + changeHex(r) + changeHex(g) + changeHex(b);
    // console.log(final)
    document.getElementById('range-color-box').style.backgroundColor = final

}

// function rangecreater(){
// }
