const axios = require('axios');
const { createWorker } = require('tesseract.js');


const solveCaptcha = async (imageUrl) => {
  // Download the image from the URL
  const { data } = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  
 
  
  
  // Pass the image to the OCR engine
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { text } = await worker.recognize(data);
  
  
  
  // Return the captcha solution
  return text;
};



  

  solveCaptcha('https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg').then(d=>console.log(d));
