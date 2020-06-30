const fs = require("fs");
const path = require("path");

const Tesseract = require('tesseract.js')
const Jimp = require("jimp");
const PDFDocument = require('pdfkit');
const express = require('express')
const hbs = require('hbs')
const bodyParser= require('body-parser')
const multer = require('multer');

///////////////////////////Addins///////////////////////////
// const filePath = path.join(__dirname, "../extras/txt samples/sample1.txt");
// console.log(filePath)
///////////////////////////-----////////////////////////////

// Create Express App
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Human TypeWriter',
        name: '1UC1F3R616'
    })
})

///////////////////////////Addins///////////////////////////
const loadFile = (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataString = dataBuffer.toString()
        return dataString
    } catch (e){
        return e
    }
}


const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb)  {
        if (!file.originalname.match(/\.(txt|docx|doc)$/)) {
            return cb(new Error('Please upload a txt or docx or doc file only'))
        }
        cb(undefined, true)
    }
})

app.post('/uploadfile', upload.single('myFile'), async (req, res, next) => {

    async function addImages(VALUES = {DATA, BUFFER_DATA, DATASET_NAME, NEXT_LINE_GAP, CLOSENESS}) { // filePath, 
        // if (filePath) {
        //     data = loadFile(filePath)
        // }
        const {DATA, BUFFER_DATA, DATASET_NAME, NEXT_LINE_GAP, CLOSENESS} = VALUES
        
        if (!DATA) {
            data = await BUFFER_DATA.toString() // Data which is to be converted
        } else {
            data = DATA
        }

        console.log(VALUES)
        
        var x=-1;
        var y=-1;
        ///////////////////////LOADING DATASET///////////////////////
        // DATASET_NAME = DATASET_NAME
        BG = await Jimp.read(`public/img/${DATASET_NAME}/bg.png`)
    
    
        zero_ = await Jimp.read(`public/img/${DATASET_NAME}/0.png`)
        one_ = await Jimp.read(`public/img/${DATASET_NAME}/1.png`)
        two_ = await Jimp.read(`public/img/${DATASET_NAME}/2.png`)
        three_ = await Jimp.read(`public/img/${DATASET_NAME}/3.png`)
        four_ = await Jimp.read(`public/img/${DATASET_NAME}/4.png`)
        five_ = await Jimp.read(`public/img/${DATASET_NAME}/5.png`)
        six_ = await Jimp.read(`public/img/${DATASET_NAME}/6.png`)
        seven_ = await Jimp.read(`public/img/${DATASET_NAME}/7.png`)
        eight_ = await Jimp.read(`public/img/${DATASET_NAME}/8.png`)
        nine_ = await Jimp.read(`public/img/${DATASET_NAME}/9.png`)
        
        a_ = await Jimp.read(`public/img/${DATASET_NAME}/a.png`)
        b_ = await Jimp.read(`public/img/${DATASET_NAME}/b.png`)
        c_ = await Jimp.read(`public/img/${DATASET_NAME}/c.png`)
        d_ = await Jimp.read(`public/img/${DATASET_NAME}/d.png`)
        e_ = await Jimp.read(`public/img/${DATASET_NAME}/e.png`)
        f_ = await Jimp.read(`public/img/${DATASET_NAME}/f.png`)
        g_ = await Jimp.read(`public/img/${DATASET_NAME}/g.png`)
        h_ = await Jimp.read(`public/img/${DATASET_NAME}/h.png`)
        i_ = await Jimp.read(`public/img/${DATASET_NAME}/i.png`)
        j_ = await Jimp.read(`public/img/${DATASET_NAME}/j.png`)
        k_ = await Jimp.read(`public/img/${DATASET_NAME}/k.png`)
        l_ = await Jimp.read(`public/img/${DATASET_NAME}/l.png`)
        m_ = await Jimp.read(`public/img/${DATASET_NAME}/m.png`)
        n_ = await Jimp.read(`public/img/${DATASET_NAME}/n.png`)
        o_ = await Jimp.read(`public/img/${DATASET_NAME}/o.png`)
        p_ = await Jimp.read(`public/img/${DATASET_NAME}/p.png`)
        q_ = await Jimp.read(`public/img/${DATASET_NAME}/q.png`)
        r_ = await Jimp.read(`public/img/${DATASET_NAME}/r.png`)
        s_ = await Jimp.read(`public/img/${DATASET_NAME}/s.png`)
        t_ = await Jimp.read(`public/img/${DATASET_NAME}/t.png`)
        u_ = await Jimp.read(`public/img/${DATASET_NAME}/u.png`)
        v_ = await Jimp.read(`public/img/${DATASET_NAME}/v.png`)
        w_ = await Jimp.read(`public/img/${DATASET_NAME}/w.png`)
        x_ = await Jimp.read(`public/img/${DATASET_NAME}/x.png`)
        y_ = await Jimp.read(`public/img/${DATASET_NAME}/y.png`)
        z_ = await Jimp.read(`public/img/${DATASET_NAME}/z.png`)
        
        A_ = await Jimp.read(`public/img/${DATASET_NAME}/a_BIG.png`)
        B_ = await Jimp.read(`public/img/${DATASET_NAME}/b_BIG.png`)
        C_ = await Jimp.read(`public/img/${DATASET_NAME}/c_BIG.png`)
        D_ = await Jimp.read(`public/img/${DATASET_NAME}/d_BIG.png`)
        E_ = await Jimp.read(`public/img/${DATASET_NAME}/e_BIG.png`)
        F_ = await Jimp.read(`public/img/${DATASET_NAME}/f_BIG.png`)
        G_ = await Jimp.read(`public/img/${DATASET_NAME}/g_BIG.png`)
        H_ = await Jimp.read(`public/img/${DATASET_NAME}/h_BIG.png`)
        I_ = await Jimp.read(`public/img/${DATASET_NAME}/i_BIG.png`)
        J_ = await Jimp.read(`public/img/${DATASET_NAME}/j_BIG.png`)
        K_ = await Jimp.read(`public/img/${DATASET_NAME}/k_BIG.png`)
        L_ = await Jimp.read(`public/img/${DATASET_NAME}/l_BIG.png`)
        M_ = await Jimp.read(`public/img/${DATASET_NAME}/m_BIG.png`)
        N_ = await Jimp.read(`public/img/${DATASET_NAME}/n_BIG.png`)
        O_ = await Jimp.read(`public/img/${DATASET_NAME}/o_BIG.png`)
        P_ = await Jimp.read(`public/img/${DATASET_NAME}/p_BIG.png`)
        Q_ = await Jimp.read(`public/img/${DATASET_NAME}/q_BIG.png`)
        R_ = await Jimp.read(`public/img/${DATASET_NAME}/r_BIG.png`)
        S_ = await Jimp.read(`public/img/${DATASET_NAME}/s_BIG.png`)
        T_ = await Jimp.read(`public/img/${DATASET_NAME}/t_BIG.png`)
        U_ = await Jimp.read(`public/img/${DATASET_NAME}/u_BIG.png`)
        V_ = await Jimp.read(`public/img/${DATASET_NAME}/v_BIG.png`)
        W_ = await Jimp.read(`public/img/${DATASET_NAME}/w_BIG.png`)
        X_ = await Jimp.read(`public/img/${DATASET_NAME}/x_BIG.png`)
        Y_ = await Jimp.read(`public/img/${DATASET_NAME}/y_BIG.png`)
        Z_ = await Jimp.read(`public/img/${DATASET_NAME}/z_BIG.png`)

        space_ = await Jimp.read(`public/img/${DATASET_NAME}/special/space.png`)
        bracket_left_ = await Jimp.read(`public/img/${DATASET_NAME}/special/bracket_left.png`) 
        bracket_right_ = await Jimp.read(`public/img/${DATASET_NAME}/special/bracket_right.png`) 
        comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/comma.png`) 
        exclamation_ = await Jimp.read(`public/img/${DATASET_NAME}/special/exclamation.png`) 
        fullstop_ = await Jimp.read(`public/img/${DATASET_NAME}/special/fullstop.png`) 
        hiphen_ = await Jimp.read(`public/img/${DATASET_NAME}/special/hiphen.png`) 
        question_ = await Jimp.read(`public/img/${DATASET_NAME}/special/question.png`)

        ampersand_ = await Jimp.read(`public/img/${DATASET_NAME}/special/ampersand.png`) 
        atTheRate_ = await Jimp.read(`public/img/${DATASET_NAME}/special/atTheRate.png`) 
        backslash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/backslash.png`) 
        close_bracket_ = await Jimp.read(`public/img/${DATASET_NAME}/special/close_bracket.png`) 
        colon_ = await Jimp.read(`public/img/${DATASET_NAME}/special/colon.png`) 
        equalTo_ = await Jimp.read(`public/img/${DATASET_NAME}/special/equalTo.png`) 
        frontslash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/frontslash.png`) 
        greater_than_ = await Jimp.read(`public/img/${DATASET_NAME}/special/greater_than.png`) 
        left_big_paranthesis_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_big_paranthesis.png`) 
        left_inverted_comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_inverted_comma.png`) 
        left_single_quote_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_single_quote.png`) 
        less_than_ = await Jimp.read(`public/img/${DATASET_NAME}/special/less_than.png`) 
        open_bracket_ = await Jimp.read(`public/img/${DATASET_NAME}/special/open_bracket.png`) 
        plus_ = await Jimp.read(`public/img/${DATASET_NAME}/special/plus.png`) 
        right_big_paranthesis_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_big_paranthesis.png`) 
        right_inverted_comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_inverted_comma.png`) 
        right_single_quote_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_single_quote.png`) 
        ruppe_ = await Jimp.read(`public/img/${DATASET_NAME}/special/ruppe.png`) 
        star_ = await Jimp.read(`public/img/${DATASET_NAME}/special/star.png`) 
        tilde_ = await Jimp.read(`public/img/${DATASET_NAME}/special/tilde.png`) 
        underscore_ = await Jimp.read(`public/img/${DATASET_NAME}/special/underscore.png`) 
        xor_ = await Jimp.read(`public/img/${DATASET_NAME}/special/xor.png`) 
        hash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/hash.png`) 
        dollar_ = await Jimp.read(`public/img/${DATASET_NAME}/special/dollar.png`) 
        percentage_ = await Jimp.read(`public/img/${DATASET_NAME}/special/percentage.png`) 
        pipe_ = await Jimp.read(`public/img/${DATASET_NAME}/special/pipe.png`) 
        ///////////////////////LOADING DATASET///////////////////////
    
        ///////////////////////MAPPING DATASET///////////////////////
        const MAPPING_DATASET = new Map()
        
        MAPPING_DATASET.set('0', zero_)
        MAPPING_DATASET.set('1', one_)
        MAPPING_DATASET.set('2', two_)
        MAPPING_DATASET.set('3', three_)
        MAPPING_DATASET.set('4', four_)
        MAPPING_DATASET.set('5', five_)
        MAPPING_DATASET.set('6', six_)
        MAPPING_DATASET.set('7', seven_)
        MAPPING_DATASET.set('8', eight_)
        MAPPING_DATASET.set('9', nine_)
    
        MAPPING_DATASET.set('a', a_)
        MAPPING_DATASET.set('b', b_)
        MAPPING_DATASET.set('c', c_)
        MAPPING_DATASET.set('d', d_)
        MAPPING_DATASET.set('e', e_)
        MAPPING_DATASET.set('f', f_)
        MAPPING_DATASET.set('g', g_)
        MAPPING_DATASET.set('h', h_)
        MAPPING_DATASET.set('i', i_)
        MAPPING_DATASET.set('j', j_)
        MAPPING_DATASET.set('k', k_)
        MAPPING_DATASET.set('l', l_)
        MAPPING_DATASET.set('m', m_)
        MAPPING_DATASET.set('n', n_)
        MAPPING_DATASET.set('o', o_)
        MAPPING_DATASET.set('p', p_)
        MAPPING_DATASET.set('q', q_)
        MAPPING_DATASET.set('r', r_)
        MAPPING_DATASET.set('s', s_)
        MAPPING_DATASET.set('t', t_)
        MAPPING_DATASET.set('u', u_)
        MAPPING_DATASET.set('v', v_)
        MAPPING_DATASET.set('w', w_)
        MAPPING_DATASET.set('x', x_)
        MAPPING_DATASET.set('y', y_)
        MAPPING_DATASET.set('z', z_)
    
        MAPPING_DATASET.set('A', A_)
        MAPPING_DATASET.set('B', B_)
        MAPPING_DATASET.set('C', C_)
        MAPPING_DATASET.set('D', D_)
        MAPPING_DATASET.set('E', E_)
        MAPPING_DATASET.set('F', F_)
        MAPPING_DATASET.set('G', G_)
        MAPPING_DATASET.set('H', H_)
        MAPPING_DATASET.set('I', I_)
        MAPPING_DATASET.set('J', J_)
        MAPPING_DATASET.set('K', K_)
        MAPPING_DATASET.set('L', L_)
        MAPPING_DATASET.set('M', M_)
        MAPPING_DATASET.set('N', N_)
        MAPPING_DATASET.set('O', O_)
        MAPPING_DATASET.set('P', P_)
        MAPPING_DATASET.set('Q', Q_)
        MAPPING_DATASET.set('R', R_)
        MAPPING_DATASET.set('S', S_)
        MAPPING_DATASET.set('T', T_)
        MAPPING_DATASET.set('U', U_)
        MAPPING_DATASET.set('V', V_)
        MAPPING_DATASET.set('W', W_)
        MAPPING_DATASET.set('X', X_)
        MAPPING_DATASET.set('Y', Y_)
        MAPPING_DATASET.set('Z', Z_)

        MAPPING_DATASET.set('space', space_)
        MAPPING_DATASET.set('bracket_left', bracket_left_)
        MAPPING_DATASET.set('bracket_right', bracket_right_)
        MAPPING_DATASET.set('comma', comma_)
        MAPPING_DATASET.set('exclamation', exclamation_)
        MAPPING_DATASET.set('fullstop', fullstop_)
        MAPPING_DATASET.set('hiphen', hiphen_)
        MAPPING_DATASET.set('question', question_)

        MAPPING_DATASET.set('ampersand', ampersand_)
        MAPPING_DATASET.set('atTheRate', atTheRate_)
        MAPPING_DATASET.set('backslash', backslash_)
        MAPPING_DATASET.set('close_bracket', close_bracket_)
        MAPPING_DATASET.set('colon', colon_)
        MAPPING_DATASET.set('equalTo', equalTo_)
        MAPPING_DATASET.set('frontslash', frontslash_)
        MAPPING_DATASET.set('greater_than', greater_than_)
        MAPPING_DATASET.set('left_big_paranthesis', left_big_paranthesis_)
        MAPPING_DATASET.set('left_inverted_comma', left_inverted_comma_)
        MAPPING_DATASET.set('left_single_quote', left_single_quote_)
        MAPPING_DATASET.set('less_than', less_than_)
        MAPPING_DATASET.set('open_bracket', open_bracket_)
        MAPPING_DATASET.set('plus', plus_)
        MAPPING_DATASET.set('right_big_paranthesis', right_big_paranthesis_)
        // MAPPING_DATASET.set('right_inverted_comma', right_inverted_comma_) // Logic needed
        // MAPPING_DATASET.set('right_single_quote', right_single_quote_) // Logic needed
        MAPPING_DATASET.set('ruppe', ruppe_)
        MAPPING_DATASET.set('star', star_)
        MAPPING_DATASET.set('tilde', tilde_)
        MAPPING_DATASET.set('underscore', underscore_)
        MAPPING_DATASET.set('xor', xor_)
        MAPPING_DATASET.set('hash', hash_)
        MAPPING_DATASET.set('dollar', dollar_)
        MAPPING_DATASET.set('percentage', percentage_)
        MAPPING_DATASET.set('pipe', pipe_)
        ///////////////////////MAPPING DATASET1///////////////////////
    
    
        ////////////////////CONSTANTS////////////////////
        const page_width = BG.bitmap.width
        const page_height = BG.bitmap.height
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            
            // Saving and Sending response as a download
            // let docData = Buffer.concat(buffers);
            
            // const fileName = 'takethis.pdf'//req.file.originalname // this will be altered
            // const fileType = 'application/pdf' //'application/pdf'

            // res.writeHead(200, {
            //     'Content-Disposition': `attachment; filename="${fileName}"`,
            //     'Content-Type': fileType,
            // })

            // res.end(docData)
            
            
        });
        doc.pipe(res) //(fs.createWriteStream('node.pdf')) // save and send response as download from buffer
        ////////////////////CONSTANTS////////////////////
    
        for (let i=0; i<data.length; i++) {
            
            x+=CLOSENESS // Control this Value to change closeness
            y+=0 // Initial value for page 1
    
            if (MAPPING_DATASET.has(data.charAt(i))) {
                if (page_width - x < MAPPING_DATASET.get(data.charAt(i)).bitmap.width + 40){ // A new line is required
                    x = 20
                    y += NEXT_LINE_GAP
                    if (page_height - y < MAPPING_DATASET.get(data.charAt(i)).bitmap.height + 70) { // A new page is required
                        BG.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                            doc.image(buffer, {
                                scale: 0.2,
                                align: 'center',
                                valign: 'center'
                              });
                              
                              console.log('added a page')
                              doc.addPage()
                          });
                          x = 20 // New line is required
                          y = 0 // Reseting y to initial for a new page
                          BG = await Jimp.read('public/img/dataset1/bg.png') // Taking a new page now
                    }
                }
                let current = MAPPING_DATASET.get(data.charAt(i))
                await BG.composite(current, x, y)
                
            } else {
                if (data.charAt(i) === '\n') {
                    x = 20 // Randomness added for new Line | 30
                    y += NEXT_LINE_GAP // Moved to next line
                } else if (data.charAt(i) === ' ') {
                    await BG.composite(MAPPING_DATASET.get('space'), x, y)
                } else if (data.charAt(i) === ')') {
                    await BG.composite(MAPPING_DATASET.get('bracket_left'), x, y)
                } else if (data.charAt(i) === '(') {
                    await BG.composite(MAPPING_DATASET.get('bracket_right'), x, y)
                } else if (data.charAt(i) === ',') {
                    await BG.composite(MAPPING_DATASET.get('comma'), x, y)
                } else if (data.charAt(i) === '!') {
                    await BG.composite(MAPPING_DATASET.get('exclamation'), x, y)
                } else if (data.charAt(i) === '.') {
                    await BG.composite(MAPPING_DATASET.get('fullstop'), x, y)
                } else if (data.charAt(i) === '-') {
                    y -= 40
                    await BG.composite(MAPPING_DATASET.get('hiphen'), x, y)
                    y += 40
                } else if (data.charAt(i) === '?') {
                    await BG.composite(MAPPING_DATASET.get('question'), x, y)

                } else if (data.charAt(i) === '&') {
                    await BG.composite(MAPPING_DATASET.get('ampersand'), x, y)
                } else if (data.charAt(i) === '@') {
                    await BG.composite(MAPPING_DATASET.get('atTheRate'), x, y)
                } else if (data.charAt(i) === '\\') {
                    await BG.composite(MAPPING_DATASET.get('backslash'), x, y)
                } else if (data.charAt(i) === ']') {
                    await BG.composite(MAPPING_DATASET.get('question'), x, y)
                } else if (data.charAt(i) === ':') {
                    await BG.composite(MAPPING_DATASET.get('colon'), x, y)
                } else if (data.charAt(i) === '=') {
                    await BG.composite(MAPPING_DATASET.get('equalTo'), x, y)
                } else if (data.charAt(i) === '/') {
                    await BG.composite(MAPPING_DATASET.get('frontslash'), x, y)
                } else if (data.charAt(i) === '>') {
                    await BG.composite(MAPPING_DATASET.get('greater_than'), x, y)
                } else if (data.charAt(i) === '}') {
                    await BG.composite(MAPPING_DATASET.get('left_big_paranthesis'), x, y)
                } else if (data.charAt(i) === '"') {
                    await BG.composite(MAPPING_DATASET.get('left_inverted_comma'), x, y)
                } else if (data.charAt(i) === '\'') {
                    await BG.composite(MAPPING_DATASET.get('left_single_quote'), x, y)
                } else if (data.charAt(i) === '<') {
                    await BG.composite(MAPPING_DATASET.get('greater_than'), x, y)
                } else if (data.charAt(i) === '[') {
                    await BG.composite(MAPPING_DATASET.get('open_bracket'), x, y)
                } else if (data.charAt(i) === '+') {
                    await BG.composite(MAPPING_DATASET.get('plus'), x, y)
                } else if (data.charAt(i) === '{') {
                    await BG.composite(MAPPING_DATASET.get('right_big_paranthesis'), x, y)
                } else if (data.charAt(i) === '₹') {
                    await BG.composite(MAPPING_DATASET.get('ruppe'), x, y)
                } else if (data.charAt(i) === '*') {
                    await BG.composite(MAPPING_DATASET.get('star'), x, y)
                } else if (data.charAt(i) === '`') {
                    await BG.composite(MAPPING_DATASET.get('tilde'), x, y)
                } else if (data.charAt(i) === '_') {
                    await BG.composite(MAPPING_DATASET.get('underscore'), x, y)
                } else if (data.charAt(i) === '^') {
                    await BG.composite(MAPPING_DATASET.get('xor'), x, y)
                } else if (data.charAt(i) === '#') {
                    await BG.composite(MAPPING_DATASET.get('hash'), x, y)
                } else if (data.charAt(i) === '$') {
                    await BG.composite(MAPPING_DATASET.get('dollar'), x, y)
                } else if (data.charAt(i) === '%') {
                    await BG.composite(MAPPING_DATASET.get('percentage'), x, y)
                } else if (data.charAt(i) === '|') {
                    await BG.composite(MAPPING_DATASET.get('pipe'), x, y)
                } else {
                    // Ignored Characters
                    await BG.composite(MAPPING_DATASET.get('space'), x, y)
                    console.log(`Ops we don\'t have ${data.charAt(i)}`)
                }
            }
    
        }
        // await BG.write('011.jpg'); // save the image
    
        BG.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            doc.image(buffer, {
                scale: 0.2,
                align: 'center',
                valign: 'center'
              });
              
            doc.end();
            console.log('pdf is saved')
          });
    }

    try{
        const fileData = req.file.buffer
        addImages({BUFFER_DATA:fileData, DATASET_NAME:'dataset1', NEXT_LINE_GAP:103, CLOSENESS:52})
        // CLOSENESS=53 | 50(DS1) | 75 (DS2) | 63 (DS2)
        // NEXT_LINE_GAP = 103 (DS1) | 120 (DS2) | (DS3)
    } catch (error) {
        res.status(400).send({error: error.message, Reason: 'Select a file first'})
    }
    


}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

///////////////////////////------///////////////////////////


//////////////////////////Tesseract Extraction Route/////////////////////////

const uploadImage = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb)  {
        if (!file.originalname.match(/\.(png|jpeg|jpg|bmp|pbm)$/)) {
            return cb(new Error('Please upload a png or jpg or jpeg or bpm or pbm image only'))
        }
        cb(undefined, true)
    }
})
app.post('/imageToHand', uploadImage.single('myFile'), async (req, res, next) => {

    // addImages is returning a reponse it self
    // Either I have to use only 1 api
    // Or I have to be copying the addImages function from above api to here
    async function addImages(VALUES = {DATA, BUFFER_DATA, DATASET_NAME, NEXT_LINE_GAP, CLOSENESS}) { // filePath, 
        // if (filePath) {
        //     data = loadFile(filePath)
        // }
        const {DATA, BUFFER_DATA, DATASET_NAME, NEXT_LINE_GAP, CLOSENESS} = VALUES
        
        if (!DATA) {
            data = await BUFFER_DATA.toString() // Data which is to be converted
        } else {
            data = DATA
        }

        console.log(VALUES)
        
        var x=-1;
        var y=-1;
        ///////////////////////LOADING DATASET///////////////////////
        // DATASET_NAME = DATASET_NAME
        BG = await Jimp.read(`public/img/${DATASET_NAME}/bg.png`)
    
    
        zero_ = await Jimp.read(`public/img/${DATASET_NAME}/0.png`)
        one_ = await Jimp.read(`public/img/${DATASET_NAME}/1.png`)
        two_ = await Jimp.read(`public/img/${DATASET_NAME}/2.png`)
        three_ = await Jimp.read(`public/img/${DATASET_NAME}/3.png`)
        four_ = await Jimp.read(`public/img/${DATASET_NAME}/4.png`)
        five_ = await Jimp.read(`public/img/${DATASET_NAME}/5.png`)
        six_ = await Jimp.read(`public/img/${DATASET_NAME}/6.png`)
        seven_ = await Jimp.read(`public/img/${DATASET_NAME}/7.png`)
        eight_ = await Jimp.read(`public/img/${DATASET_NAME}/8.png`)
        nine_ = await Jimp.read(`public/img/${DATASET_NAME}/9.png`)
        
        a_ = await Jimp.read(`public/img/${DATASET_NAME}/a.png`)
        b_ = await Jimp.read(`public/img/${DATASET_NAME}/b.png`)
        c_ = await Jimp.read(`public/img/${DATASET_NAME}/c.png`)
        d_ = await Jimp.read(`public/img/${DATASET_NAME}/d.png`)
        e_ = await Jimp.read(`public/img/${DATASET_NAME}/e.png`)
        f_ = await Jimp.read(`public/img/${DATASET_NAME}/f.png`)
        g_ = await Jimp.read(`public/img/${DATASET_NAME}/g.png`)
        h_ = await Jimp.read(`public/img/${DATASET_NAME}/h.png`)
        i_ = await Jimp.read(`public/img/${DATASET_NAME}/i.png`)
        j_ = await Jimp.read(`public/img/${DATASET_NAME}/j.png`)
        k_ = await Jimp.read(`public/img/${DATASET_NAME}/k.png`)
        l_ = await Jimp.read(`public/img/${DATASET_NAME}/l.png`)
        m_ = await Jimp.read(`public/img/${DATASET_NAME}/m.png`)
        n_ = await Jimp.read(`public/img/${DATASET_NAME}/n.png`)
        o_ = await Jimp.read(`public/img/${DATASET_NAME}/o.png`)
        p_ = await Jimp.read(`public/img/${DATASET_NAME}/p.png`)
        q_ = await Jimp.read(`public/img/${DATASET_NAME}/q.png`)
        r_ = await Jimp.read(`public/img/${DATASET_NAME}/r.png`)
        s_ = await Jimp.read(`public/img/${DATASET_NAME}/s.png`)
        t_ = await Jimp.read(`public/img/${DATASET_NAME}/t.png`)
        u_ = await Jimp.read(`public/img/${DATASET_NAME}/u.png`)
        v_ = await Jimp.read(`public/img/${DATASET_NAME}/v.png`)
        w_ = await Jimp.read(`public/img/${DATASET_NAME}/w.png`)
        x_ = await Jimp.read(`public/img/${DATASET_NAME}/x.png`)
        y_ = await Jimp.read(`public/img/${DATASET_NAME}/y.png`)
        z_ = await Jimp.read(`public/img/${DATASET_NAME}/z.png`)
        
        A_ = await Jimp.read(`public/img/${DATASET_NAME}/a_BIG.png`)
        B_ = await Jimp.read(`public/img/${DATASET_NAME}/b_BIG.png`)
        C_ = await Jimp.read(`public/img/${DATASET_NAME}/c_BIG.png`)
        D_ = await Jimp.read(`public/img/${DATASET_NAME}/d_BIG.png`)
        E_ = await Jimp.read(`public/img/${DATASET_NAME}/e_BIG.png`)
        F_ = await Jimp.read(`public/img/${DATASET_NAME}/f_BIG.png`)
        G_ = await Jimp.read(`public/img/${DATASET_NAME}/g_BIG.png`)
        H_ = await Jimp.read(`public/img/${DATASET_NAME}/h_BIG.png`)
        I_ = await Jimp.read(`public/img/${DATASET_NAME}/i_BIG.png`)
        J_ = await Jimp.read(`public/img/${DATASET_NAME}/j_BIG.png`)
        K_ = await Jimp.read(`public/img/${DATASET_NAME}/k_BIG.png`)
        L_ = await Jimp.read(`public/img/${DATASET_NAME}/l_BIG.png`)
        M_ = await Jimp.read(`public/img/${DATASET_NAME}/m_BIG.png`)
        N_ = await Jimp.read(`public/img/${DATASET_NAME}/n_BIG.png`)
        O_ = await Jimp.read(`public/img/${DATASET_NAME}/o_BIG.png`)
        P_ = await Jimp.read(`public/img/${DATASET_NAME}/p_BIG.png`)
        Q_ = await Jimp.read(`public/img/${DATASET_NAME}/q_BIG.png`)
        R_ = await Jimp.read(`public/img/${DATASET_NAME}/r_BIG.png`)
        S_ = await Jimp.read(`public/img/${DATASET_NAME}/s_BIG.png`)
        T_ = await Jimp.read(`public/img/${DATASET_NAME}/t_BIG.png`)
        U_ = await Jimp.read(`public/img/${DATASET_NAME}/u_BIG.png`)
        V_ = await Jimp.read(`public/img/${DATASET_NAME}/v_BIG.png`)
        W_ = await Jimp.read(`public/img/${DATASET_NAME}/w_BIG.png`)
        X_ = await Jimp.read(`public/img/${DATASET_NAME}/x_BIG.png`)
        Y_ = await Jimp.read(`public/img/${DATASET_NAME}/y_BIG.png`)
        Z_ = await Jimp.read(`public/img/${DATASET_NAME}/z_BIG.png`)

        space_ = await Jimp.read(`public/img/${DATASET_NAME}/special/space.png`)
        bracket_left_ = await Jimp.read(`public/img/${DATASET_NAME}/special/bracket_left.png`) 
        bracket_right_ = await Jimp.read(`public/img/${DATASET_NAME}/special/bracket_right.png`) 
        comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/comma.png`) 
        exclamation_ = await Jimp.read(`public/img/${DATASET_NAME}/special/exclamation.png`) 
        fullstop_ = await Jimp.read(`public/img/${DATASET_NAME}/special/fullstop.png`) 
        hiphen_ = await Jimp.read(`public/img/${DATASET_NAME}/special/hiphen.png`) 
        question_ = await Jimp.read(`public/img/${DATASET_NAME}/special/question.png`)

        ampersand_ = await Jimp.read(`public/img/${DATASET_NAME}/special/ampersand.png`) 
        atTheRate_ = await Jimp.read(`public/img/${DATASET_NAME}/special/atTheRate.png`) 
        backslash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/backslash.png`) 
        close_bracket_ = await Jimp.read(`public/img/${DATASET_NAME}/special/close_bracket.png`) 
        colon_ = await Jimp.read(`public/img/${DATASET_NAME}/special/colon.png`) 
        equalTo_ = await Jimp.read(`public/img/${DATASET_NAME}/special/equalTo.png`) 
        frontslash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/frontslash.png`) 
        greater_than_ = await Jimp.read(`public/img/${DATASET_NAME}/special/greater_than.png`) 
        left_big_paranthesis_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_big_paranthesis.png`) 
        left_inverted_comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_inverted_comma.png`) 
        left_single_quote_ = await Jimp.read(`public/img/${DATASET_NAME}/special/left_single_quote.png`) 
        less_than_ = await Jimp.read(`public/img/${DATASET_NAME}/special/less_than.png`) 
        open_bracket_ = await Jimp.read(`public/img/${DATASET_NAME}/special/open_bracket.png`) 
        plus_ = await Jimp.read(`public/img/${DATASET_NAME}/special/plus.png`) 
        right_big_paranthesis_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_big_paranthesis.png`) 
        right_inverted_comma_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_inverted_comma.png`) 
        right_single_quote_ = await Jimp.read(`public/img/${DATASET_NAME}/special/right_single_quote.png`) 
        ruppe_ = await Jimp.read(`public/img/${DATASET_NAME}/special/ruppe.png`) 
        star_ = await Jimp.read(`public/img/${DATASET_NAME}/special/star.png`) 
        tilde_ = await Jimp.read(`public/img/${DATASET_NAME}/special/tilde.png`) 
        underscore_ = await Jimp.read(`public/img/${DATASET_NAME}/special/underscore.png`) 
        xor_ = await Jimp.read(`public/img/${DATASET_NAME}/special/xor.png`) 
        hash_ = await Jimp.read(`public/img/${DATASET_NAME}/special/hash.png`) 
        dollar_ = await Jimp.read(`public/img/${DATASET_NAME}/special/dollar.png`) 
        percentage_ = await Jimp.read(`public/img/${DATASET_NAME}/special/percentage.png`) 
        pipe_ = await Jimp.read(`public/img/${DATASET_NAME}/special/pipe.png`) 
        ///////////////////////LOADING DATASET///////////////////////
    
        ///////////////////////MAPPING DATASET///////////////////////
        const MAPPING_DATASET = new Map()
        
        MAPPING_DATASET.set('0', zero_)
        MAPPING_DATASET.set('1', one_)
        MAPPING_DATASET.set('2', two_)
        MAPPING_DATASET.set('3', three_)
        MAPPING_DATASET.set('4', four_)
        MAPPING_DATASET.set('5', five_)
        MAPPING_DATASET.set('6', six_)
        MAPPING_DATASET.set('7', seven_)
        MAPPING_DATASET.set('8', eight_)
        MAPPING_DATASET.set('9', nine_)
    
        MAPPING_DATASET.set('a', a_)
        MAPPING_DATASET.set('b', b_)
        MAPPING_DATASET.set('c', c_)
        MAPPING_DATASET.set('d', d_)
        MAPPING_DATASET.set('e', e_)
        MAPPING_DATASET.set('f', f_)
        MAPPING_DATASET.set('g', g_)
        MAPPING_DATASET.set('h', h_)
        MAPPING_DATASET.set('i', i_)
        MAPPING_DATASET.set('j', j_)
        MAPPING_DATASET.set('k', k_)
        MAPPING_DATASET.set('l', l_)
        MAPPING_DATASET.set('m', m_)
        MAPPING_DATASET.set('n', n_)
        MAPPING_DATASET.set('o', o_)
        MAPPING_DATASET.set('p', p_)
        MAPPING_DATASET.set('q', q_)
        MAPPING_DATASET.set('r', r_)
        MAPPING_DATASET.set('s', s_)
        MAPPING_DATASET.set('t', t_)
        MAPPING_DATASET.set('u', u_)
        MAPPING_DATASET.set('v', v_)
        MAPPING_DATASET.set('w', w_)
        MAPPING_DATASET.set('x', x_)
        MAPPING_DATASET.set('y', y_)
        MAPPING_DATASET.set('z', z_)
    
        MAPPING_DATASET.set('A', A_)
        MAPPING_DATASET.set('B', B_)
        MAPPING_DATASET.set('C', C_)
        MAPPING_DATASET.set('D', D_)
        MAPPING_DATASET.set('E', E_)
        MAPPING_DATASET.set('F', F_)
        MAPPING_DATASET.set('G', G_)
        MAPPING_DATASET.set('H', H_)
        MAPPING_DATASET.set('I', I_)
        MAPPING_DATASET.set('J', J_)
        MAPPING_DATASET.set('K', K_)
        MAPPING_DATASET.set('L', L_)
        MAPPING_DATASET.set('M', M_)
        MAPPING_DATASET.set('N', N_)
        MAPPING_DATASET.set('O', O_)
        MAPPING_DATASET.set('P', P_)
        MAPPING_DATASET.set('Q', Q_)
        MAPPING_DATASET.set('R', R_)
        MAPPING_DATASET.set('S', S_)
        MAPPING_DATASET.set('T', T_)
        MAPPING_DATASET.set('U', U_)
        MAPPING_DATASET.set('V', V_)
        MAPPING_DATASET.set('W', W_)
        MAPPING_DATASET.set('X', X_)
        MAPPING_DATASET.set('Y', Y_)
        MAPPING_DATASET.set('Z', Z_)

        MAPPING_DATASET.set('space', space_)
        MAPPING_DATASET.set('bracket_left', bracket_left_)
        MAPPING_DATASET.set('bracket_right', bracket_right_)
        MAPPING_DATASET.set('comma', comma_)
        MAPPING_DATASET.set('exclamation', exclamation_)
        MAPPING_DATASET.set('fullstop', fullstop_)
        MAPPING_DATASET.set('hiphen', hiphen_)
        MAPPING_DATASET.set('question', question_)

        MAPPING_DATASET.set('ampersand', ampersand_)
        MAPPING_DATASET.set('atTheRate', atTheRate_)
        MAPPING_DATASET.set('backslash', backslash_)
        MAPPING_DATASET.set('close_bracket', close_bracket_)
        MAPPING_DATASET.set('colon', colon_)
        MAPPING_DATASET.set('equalTo', equalTo_)
        MAPPING_DATASET.set('frontslash', frontslash_)
        MAPPING_DATASET.set('greater_than', greater_than_)
        MAPPING_DATASET.set('left_big_paranthesis', left_big_paranthesis_)
        MAPPING_DATASET.set('left_inverted_comma', left_inverted_comma_)
        MAPPING_DATASET.set('left_single_quote', left_single_quote_)
        MAPPING_DATASET.set('less_than', less_than_)
        MAPPING_DATASET.set('open_bracket', open_bracket_)
        MAPPING_DATASET.set('plus', plus_)
        MAPPING_DATASET.set('right_big_paranthesis', right_big_paranthesis_)
        // MAPPING_DATASET.set('right_inverted_comma', right_inverted_comma_) // Logic needed
        // MAPPING_DATASET.set('right_single_quote', right_single_quote_) // Logic needed
        MAPPING_DATASET.set('ruppe', ruppe_)
        MAPPING_DATASET.set('star', star_)
        MAPPING_DATASET.set('tilde', tilde_)
        MAPPING_DATASET.set('underscore', underscore_)
        MAPPING_DATASET.set('xor', xor_)
        MAPPING_DATASET.set('hash', hash_)
        MAPPING_DATASET.set('dollar', dollar_)
        MAPPING_DATASET.set('percentage', percentage_)
        MAPPING_DATASET.set('pipe', pipe_)
        ///////////////////////MAPPING DATASET1///////////////////////
    
        ////////////////////CONSTANTS////////////////////
        const page_width = BG.bitmap.width
        const page_height = BG.bitmap.height
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            
            // Saving and Sending response as a download
            // let docData = Buffer.concat(buffers);
            
            // const fileName = 'takethis.pdf'//req.file.originalname // this will be altered
            // const fileType = 'application/pdf' //'application/pdf'

            // res.writeHead(200, {
            //     'Content-Disposition': `attachment; filename="${fileName}"`,
            //     'Content-Type': fileType,
            // })

            // res.end(docData)
            
            
        });
        doc.pipe(res) //(fs.createWriteStream('node.pdf')) // save and send response as download from buffer
        ////////////////////CONSTANTS////////////////////
    
        for (let i=0; i<data.length; i++) {
            
            x+=CLOSENESS // Control this Value to change closeness
            y+=0 // Initial value for page 1
    
            if (MAPPING_DATASET.has(data.charAt(i))) {
                if (page_width - x < MAPPING_DATASET.get(data.charAt(i)).bitmap.width + 40){ // A new line is required
                    x = 20
                    y += NEXT_LINE_GAP
                    if (page_height - y < MAPPING_DATASET.get(data.charAt(i)).bitmap.height + 70) { // A new page is required
                        BG.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                            doc.image(buffer, {
                                scale: 0.2,
                                align: 'center',
                                valign: 'center'
                              });
                              
                              console.log('added a page')
                              doc.addPage()
                          });
                          x = 20 // New line is required
                          y = 0 // Reseting y to initial for a new page
                          BG = await Jimp.read('public/img/dataset1/bg.png') // Taking a new page now
                    }
                }
                let current = MAPPING_DATASET.get(data.charAt(i))
                await BG.composite(current, x, y)
                
            } else {
                if (data.charAt(i) === '\n') {
                    x = 20 // Randomness added for new Line | 30
                    y += NEXT_LINE_GAP // Moved to next line
                } else if (data.charAt(i) === ' ') {
                    await BG.composite(MAPPING_DATASET.get('space'), x, y)
                } else if (data.charAt(i) === ')') {
                    await BG.composite(MAPPING_DATASET.get('bracket_left'), x, y)
                } else if (data.charAt(i) === '(') {
                    await BG.composite(MAPPING_DATASET.get('bracket_right'), x, y)
                } else if (data.charAt(i) === ',') {
                    await BG.composite(MAPPING_DATASET.get('comma'), x, y)
                } else if (data.charAt(i) === '!') {
                    await BG.composite(MAPPING_DATASET.get('exclamation'), x, y)
                } else if (data.charAt(i) === '.') {
                    await BG.composite(MAPPING_DATASET.get('fullstop'), x, y)
                } else if (data.charAt(i) === '-') {
                    await BG.composite(MAPPING_DATASET.get('hiphen'), x, y)
                } else if (data.charAt(i) === '?') {
                    await BG.composite(MAPPING_DATASET.get('question'), x, y)

                } else if (data.charAt(i) === '&') {
                    await BG.composite(MAPPING_DATASET.get('ampersand'), x, y)
                } else if (data.charAt(i) === '@') {
                    await BG.composite(MAPPING_DATASET.get('atTheRate'), x, y)
                } else if (data.charAt(i) === '\\') {
                    await BG.composite(MAPPING_DATASET.get('backslash'), x, y)
                } else if (data.charAt(i) === ']') {
                    await BG.composite(MAPPING_DATASET.get('question'), x, y)
                } else if (data.charAt(i) === ':') {
                    await BG.composite(MAPPING_DATASET.get('colon'), x, y)
                } else if (data.charAt(i) === '=') {
                    await BG.composite(MAPPING_DATASET.get('equalTo'), x, y)
                } else if (data.charAt(i) === '/') {
                    await BG.composite(MAPPING_DATASET.get('frontslash'), x, y)
                } else if (data.charAt(i) === '>') {
                    await BG.composite(MAPPING_DATASET.get('greater_than'), x, y)
                } else if (data.charAt(i) === '}') {
                    await BG.composite(MAPPING_DATASET.get('left_big_paranthesis'), x, y)
                } else if (data.charAt(i) === '"') {
                    await BG.composite(MAPPING_DATASET.get('left_inverted_comma'), x, y)
                } else if (data.charAt(i) === '\'') {
                    await BG.composite(MAPPING_DATASET.get('left_single_quote'), x, y)
                } else if (data.charAt(i) === '-') {
                    await BG.composite(MAPPING_DATASET.get('hiphen'), x, y)
                } else if (data.charAt(i) === '[') {
                    await BG.composite(MAPPING_DATASET.get('open_bracket'), x, y)
                } else if (data.charAt(i) === '+') {
                    await BG.composite(MAPPING_DATASET.get('plus'), x, y)
                } else if (data.charAt(i) === '{') {
                    await BG.composite(MAPPING_DATASET.get('right_big_paranthesis'), x, y)
                } else if (data.charAt(i) === '₹') {
                    await BG.composite(MAPPING_DATASET.get('ruppe'), x, y)
                } else if (data.charAt(i) === '*') {
                    await BG.composite(MAPPING_DATASET.get('star'), x, y)
                } else if (data.charAt(i) === '`') {
                    await BG.composite(MAPPING_DATASET.get('tilde'), x, y)
                } else if (data.charAt(i) === '_') {
                    await BG.composite(MAPPING_DATASET.get('underscore'), x, y)
                } else if (data.charAt(i) === '^') {
                    await BG.composite(MAPPING_DATASET.get('xor'), x, y)
                } else if (data.charAt(i) === '#') {
                    await BG.composite(MAPPING_DATASET.get('hash'), x, y)
                } else if (data.charAt(i) === '$') {
                    await BG.composite(MAPPING_DATASET.get('dollar'), x, y)
                } else if (data.charAt(i) === '%') {
                    await BG.composite(MAPPING_DATASET.get('percentage'), x, y)
                } else if (data.charAt(i) === '|') {
                    await BG.composite(MAPPING_DATASET.get('pipe'), x, y)
                } else {
                    // Ignored Characters
                    await BG.composite(MAPPING_DATASET.get('space'), x, y)
                    console.log(`Ops we don\'t have ${data.charAt(i)}`)
                }
            }
    
        }
        // await BG.write('011.jpg'); // save the image
    
        BG.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            doc.image(buffer, {
                scale: 0.2,
                align: 'center',
                valign: 'center'
              });
              
            doc.end();
            console.log('pdf is saved')
          });
    }


    console.log(req.body)
    
    try{
        if (!req.body.imageLink && !req.file.buffer) {
            res.status(400).send({error: 'Image Link or Image is missing'})
        }
        if (!req.body.imageLink) {
            var fileData = req.file.buffer
        } else {
            var fileData = req.body.imageLink
        }
        // req.file.buffer // req.body.imageLink
        Tesseract.recognize(
            fileData,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            // res.status(200).send(text)
            addImages({DATA:text, DATASET_NAME:'dataset1', NEXT_LINE_GAP:103, CLOSENESS:52})
          })
    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}, (error, req, res) => {
    res.status(400).send({error: error.message, Reason: ['Give a valid link or Image Upload', 
                                                          'Supported Images are png, jpg, bmp, pbm']})
})

//////////////////////////Tesseract Extraction Route/////////////////////////


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kush',
        errorMessage: 'Help Article Not Found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kush',
        errorMessage: 'Page Not Found'
    })
})

app.listen(port, () => {
    console.log('Server is Running! on ' + port)
})
