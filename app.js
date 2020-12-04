class UILibrary {
    constructor(el, initialState = {}, methods = {}) {
        this.el = document.querySelector(el);
        this.state = initialState;
        this.methods = methods;
        this.renderTemplate()
    }
    updateState(obj) {
        Object.keys(obj).forEach(variable => {
            const variableValue = obj[variable]
            this.state[variable] = variableValue
        });
        this.renderTemplate();
    }
    render() {
        return ``
    }
    renderTemplate() {
        let template = this.render();
        Object.keys(this.state).forEach(variable => {
            const variableValue = this.state[variable]
            template = template.replace(new RegExp(`{{${variable}}}`, 'g'), variableValue)
        });
        this.el.innerHTML = template;
    }
}
class Home extends UILibrary {
    constructor(el, state, methods) {
        super(el, state, methods)
        setTimeout(() => {
            this.updateState({
                siteName: "Uconnect",
                date: "2015 Sept 1",
                name: "Mohsin"
            })
        }, 2000);
        setTimeout(() => {
            this.updateState({
                siteName: "Facebook",
                date: "2003 jan 1",
                name: "Ali Sher"
            })
        }, 4000);
        setTimeout(() => {
            this.updateState({
                siteName: "Youtube",
                date: "2009 oct 1",
                name: "Ali Hussain"
            })
        }, 6000);
        setTimeout(() => {
            this.updateState({
                siteName: "Vue js",
                date: "2020 dec 1",
                name: "Mushtaq"
            })
        }, 8000);
    }
    render() {
        return `<h1>Welcome to {{siteName}} <br> Launch date is {{date}}. <Br> {{name}}</h1>`
    }
}
class About extends UILibrary {
    render() {
        return `
            <div>About Us</div>
        `
    }
}
const app = new Home(".app", {
    siteName: "Google",
    date: "2019 March 12",
    name: "fayyaz"
}, {});git
const about = new About(".about", {
}, {});