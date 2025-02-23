class TeachableMachineExtension {
    constructor(runtime) {
        this.runtime = runtime;
        this.modelURL = "https://teachablemachine.withgoogle.com/models/ft-yEFl0l/model.json";
        this.model = null;
        this.loadModel();
    }

    async loadModel() {
        this.model = await tmImage.load(this.modelURL);
    }

    async detectFace(args) {
        const predictions = await this.model.predict(webcam.canvas);
        return predictions.some(p => p.className === args.CLASS_NAME && p.probability > 0.8);
    }
}

Scratch.extensions.register(new TeachableMachineExtension());
