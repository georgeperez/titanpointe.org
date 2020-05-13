"use strict";

var canvas;
var gl;

var NumVertices  = 36;

//variables para los indices de rotacion
var rxAxis = 0;
var ryAxis = 1;
var rzAxis = 2;

//variables para los indices de traslacion
var txAxis = 0;
var tyAxis = 1;
var tzAxis = 2;

//variables para los indices de escalas
var sxAxis = 0;
var syAxis = 1;
var szAxis = 2;

//variable que indica cual indice a rotar, trasladar o escalar segun la seleccion del usuario
var raxis = 0;
var taxis = 0;
var saxis = 0;

//vector de rotacion
var theta = [0, 0, 0];

//variable para hacer referencia al variable del gpu (vshader)
//de rotacion, traslacion y escalas
var thetaLoc;
var trasLoc;
var scalLoc;

//vector de traslacion
var translation = [0, 0, 0];
var colors = [];

//vector de escala
var scaling = [1, 1, 1];

//data a visualizar cubo
var cube2 = [[-0.5, 0.5, 0.5, 1],
 [-0.5, -0.5, 0.5, 1],
  [0.5, -0.5, 0.5, 1],
  [-0.5, 0.5, 0.5, 1],
 [0.5, -0.5, 0.5, 1],
  [0.5, 0.5, 0.5, 1],
 [0.5, 0.5, 0.5, 1],
  [0.5, -0.5, 0.5, 1],
 [0.5, -0.5, -0.5, 1],
  [0.5, 0.5, 0.5, 1],
  [0.5, -0.5, -0.5, 1],
  [0.5, 0.5, -0.5, 1],
 [0.5, -0.5, 0.5, 1],
  [-0.5, -0.5, 0.5, 1],
  [-0.5, -0.5, -0.5, 1],
  [0.5, -0.5, 0.5, 1],
  [-0.5, -0.5, -0.5, 1],
  [0.5, -0.5, -0.5, 1],
 [0.5, 0.5, -0.5, 1],
  [-0.5, 0.5, -0.5, 1],
  [-0.5, 0.5, 0.5, 1],
 [0.5, 0.5, -0.5, 1],
 [-0.5, 0.5, 0.5, 1],
  [0.5, 0.5, 0.5, 1],
 [-0.5, -0.5, -0.5, 1],
 [-0.5, 0.5, -0.5, 1],
 [0.5, 0.5, -0.5, 1],
  [-0.5, -0.5, -0.5, 1],
 [0.5, 0.5, -0.5, 1],
 [0.5, -0.5, -0.5, 1],
  [-0.5, 0.5, -0.5, 1],
 [-0.5, -0.5, -0.5, 1],
 [-0.5, -0.5, 0.5, 1],
 [-0.5, 0.5, -0.5, 1],
 [-0.5, -0.5, 0.5, 1],
 [-0.5, 0.5, 0.5, 1]];

var cBuffer;
var vColor;
var vBuffer;
var vPosition;

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
    colorCube();
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    //linking with the vshader variables
    thetaLoc = gl.getUniformLocation(program, "theta");
    trasLoc = gl.getUniformLocation(program, "tras");
    scalLoc = gl.getUniformLocation(program, "scal");

    cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
    cBuffer.itemSize = 4;
    cBuffer.numItems = 36;

    vColor = gl.getAttribLocation( program, "vColor" );
    gl.enableVertexAttribArray( vColor );
    gl.vertexAttribPointer( vColor, cBuffer.itemSize, gl.FLOAT, false, 0, 0 );


    vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(cube2), gl.STATIC_DRAW );

    vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var mode = 0;

    function currentMode(mode) {
        var msg;

        if (mode === 0) {
            return "None currently selected";
        } else if (mode === 1) {
            return "Rotation";
        } else if (mode === 2) {
            return "Translation";
        } else if (mode === 3) {
            return "Scaling";
        }
    };

    function hideElement() {
        var elem = document.getElementById("not-supported-in-x-scale");
        if (elem.style.display === "none" && (mode === 1 || mode === 2)) {
            elem.style.display = "block";
        } else if (mode === 3) {
            elem.style.display = "none";
        }
    }

    function outputThetaArray() {
        return theta;
    };

    function outputTranslationArray() {
        return translation;
    };

    function outputScalingArray() {
        return scaling;
    };

    //event listeners for buttons

    document.getElementById("RotateButton").onclick = function () {
        mode = 1;
        document.getElementById("currentMode").innerHTML = currentMode(mode);

        window.onkeydown = function (event) {
            var key = String.fromCharCode(event.keyCode);

            switch (key) {
                case '1':
                    theta[rxAxis] -= 2.0;
                    break;
                case '2':
                    theta[rxAxis] += 2.0;
                    break;
                case '3':
                    theta[ryAxis] -= 2.0;
                    break;
                case '4':
                    theta[ryAxis] += 2.0;
                    break;
                case '5':
                    theta[rzAxis] -= 2.0;
                    break;
                case '6':
                    theta[rzAxis] += 2.0;
                    break;
            }
            document.getElementById("thetaArray").innerHTML = outputThetaArray();
        };
    };

    document.getElementById("TranslateButton").onclick = function () {
        mode = 2;
        document.getElementById("currentMode").innerHTML = currentMode(mode);

        window.onkeydown = function (event) {
            var key = String.fromCharCode(event.keyCode);

            switch (key) {
                case '1':
                    translation[txAxis] -= 0.01;
                    break;
                case '2':
                    translation[txAxis] += 0.01;
                    break;
                case '3':
                    translation[tyAxis] -= 0.01;
                    break;
                case '4':
                    translation[tyAxis] += 0.01;
                    break;
                case '5':
                    translation[tzAxis] -= 0.01;
                    break;
                case '6':
                    translation[tzAxis] += 0.01;
                    break;
            }
            document.getElementById("translationArray").innerHTML = outputTranslationArray();
        };
    };

    document.getElementById("ScaleButton").onclick = function () {
        mode = 3;
        document.getElementById("currentMode").innerHTML = currentMode(mode);

        window.onkeydown = function (event) {
            var key = String.fromCharCode(event.keyCode);

            switch (key) {
                case '1':
                    scaling[sxAxis] -= 0.01;
                    break;
                case '2':
                    scaling[sxAxis] += 0.01;
                    break;
                case '3':
                    scaling[syAxis] -= 0.01;
                    break;
                case '4':
                    scaling[syAxis] += 0.01;
                    break;
                case '5':
                    scaling[szAxis] -= 0.01;
                    break;
                case '6':
                    scaling[szAxis] += 0.01;
                    break;
            }
            document.getElementById("scalingArray").innerHTML = outputScalingArray();
        };
    };

    document.getElementById("currentMode").innerHTML = currentMode(mode);

    document.getElementById("thetaArray").innerHTML = outputThetaArray();

    document.getElementById("translationArray").innerHTML = outputTranslationArray();

    document.getElementById("scalingArray").innerHTML = outputScalingArray();

    render();
}



function render() {
    gl.enable(gl.DEPTH_TEST);
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniform3fv(thetaLoc, theta);
    gl.uniform3fv(trasLoc, translation);
    gl.uniform3fv(scalLoc, scaling);
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.vertexAttribPointer( vColor, cBuffer.itemSize, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, NumVertices );

    requestAnimFrame( render );
}

function colorCube() {
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );
}

function quad(a, b, c, d) {


    var vertexColors = [
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 1.0, 1.0 ],  // blue
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 1.0, 1.0, 1.0, 1.0 ]   // white
    ];

    var indices = [ a, b, c, a, c, d ];

    for ( var i = 0; i < indices.length; ++i ) {
        // for solid colored faces use
        colors.push(vertexColors[a]);
    }
}
