const telecharger = document.getElementById('boutonTelecharger');
const retour = docment.getElementById("boutonRetour")
const coleur = docment.getElementById("boutonCouleur")
function downloadPDF() {
    const element = document.getElementById("div0");
    document.getElementById('btn').style.display = 'none';
    var opt = {
        margin:       0,
        filename:     'cv_sanogo.pdf',
        image:        { type: 'png', quality: 0.98 },
        html2canvas:  { 
            scale: 2,
            scrollY:0,
            // scrollX:200
         },
        jsPDF:        { unit: 'px', format: [595,830], orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    html2pdf(element, opt);
    window.onload();
}
