window.onload = function () {
    start()
}

let image, imageAnalysisLabelsElement, imageAnalysisLoaderElement, imagePreviewElement

function start() {
    image = new Image()
    imageAnalysisLabelsElement = document.getElementById('image-analysis-labels')
    imageAnalysisLoaderElement = document.getElementById('image-analysis-loader')
    imagePreviewElement = document.getElementById('image-preview')
    document.getElementById('image-input').addEventListener('change', imageInputChangedHandler)
}

function imageInputChangedHandler(event) {
    image.src = URL.createObjectURL(event.target.files[0])
    imagePreviewElement.src = image.src
    imageAnalysisLoaderElement.style.display = 'block'
    imageAnalysisLabelsElement.innerHTML = ''
    detect()
}

async function detect() {
    const VERSION = 2
    const ALPHA = .75
    const model = await mobilenet.load(VERSION, ALPHA)

    const predictions = await model.classify(image)
    showPredictions(predictions)

    console.log('Logits:')
    const logits = model.infer(image)
    logits.print(true)

    console.log('Embedding:')
    const embedding = model.infer(image, true)
    embedding.print(true)
}

function showPredictions(predictions) {
    imageAnalysisLoaderElement.style.display = 'none'
    const liClass = [
        'mt-2'
    ].join(' ')
    const spanClass = [
        'align-middle',
        'bg-gray-600',
        'px-2',
        'py-1',
        'rounded-full',
        'text-white',
    ].join(' ')
    imageAnalysisLabelsElement.innerHTML = predictions.map(prediction => `<li class="${liClass}"><span class="${spanClass}">${Math.round(prediction.probability * 100)}%</span> ${prediction.className}</li>`).join('\n')
}