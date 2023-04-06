const Config = {
    url: import.meta.env.PROD 
        ? 'https://sungem.tinycloud.live/'
        : 'http://127.0.0.1:8000/'
}

Object.freeze(Config)

export default Config