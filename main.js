var selectedFile;
var lines;
var colors;
let documentViewPoint;
let fileList;
let array;
let documentText
var program;
var gl;
var canvas;


function handleFiles(event) {
    if (!this.files.length) {
        //no files selected
    }
    //fileList = this.files;
    var parser = new DOMParser;
    var fileReader = readTextFile(event);
    fileReader.onload=function(){
    documentText = parser.parseFromString(fileReader.result,"text/xml");
    array = xmlGetViewbox(documentText, [0, 0, 400, 400]);//need to do math with this
    //input will de default otherwise
    //buffer??
    console.log(array);


    var vPosition = gl.getAttribLocation(program, "vPosition");
    lines = xmlGetLines(selectedFile, vec4(0.0, 0.0, 0.0, 1.0)); //black for right now
    //returns double array
    for (let i = 0; i < lines.length; ++i) {//going through rows 
        if (i=0) {//vertices 
            for (let j = 0; j < lines[0].length; ++j)
            points.push(lines[0][j]);
        }
        if (i==1) {//corrosponding colors
            for (let j = 0; j < lines[0].length; ++j)
            colors.push(lines[1][j]);
        }
    }
    // var vBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

    // var vPosition = gl.getAttribLocation(program, "vPosition");
    // gl.enableVertexAttribArray(vPosition);
    // gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);

    // gl.drawArrays(gl.LINES, 0, points.length);
    
    //gl.drawArrays(gl.POINTS, 0, points.length);
    };
    
    
    
    

    
}






function main()
{
    // Retrieve <canvas> element
    canvas = document.getElementById('webgl');

    // Get the rendering context for WebGL
    gl = WebGLUtils.setupWebGL(canvas, undefined);

    //Check that the return value is not null.
    if (!gl)
    {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // Initialize shaders
    program = initShaders(gl, "vshader", "fshader");
    gl.useProgram(program);

    //Set up the viewport
    gl.viewport( 0, 0, 400, 400);
    //then do the calculatotions
    //gl.viewport( 0, 0, canvas.width, canvas.height);

    points = [];
    // points.push(vec4(-0.5, -0.5, 0.0, 1.0));
	// points.push(vec4(0.5, -0.5, 0.0, 1.0));
    // points.push(vec4(0.0, 0.5, 0.0, 1.0));

    

    selectedFile = document.getElementById("fileupload");
    selectedFile.addEventListener("change", handleFiles,false); 
    
    
    //false inner events then outter events handled
//was change originally
    // var vBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

    // var vPosition = gl.getAttribLocation(program, "vPosition");
    // gl.enableVertexAttribArray(vPosition);
    // gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);

    // //gl.drawArrays(gl.LINES, 0, points.length);
    // gl.drawArrays(gl.POINTS, 0, points.length);
    
    
}

