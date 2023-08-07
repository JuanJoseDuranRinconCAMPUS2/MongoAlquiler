import rateLimit from "express-rate-limit";

export let limitGColecciones = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>1){
                res.status(413).send({
                    status: 413,
                    message: "Este EndPoint no admite datos de entrada"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Colecciones'
            })
        }
    })
}

export let limitCrearColecciones = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>60){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Colecciones'
            })
        }
    })
}

export let limitPAlquiler = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>250){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Alquiler'
            })
        }
    })
}

export let limitPAutomovil = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>280){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Automovil'
            })
        }
    })
}

export let limitPCliente = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>250){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Cliente'
            })
        }
    })
}

export let limitPEmpleado = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>240){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Empleado'
            })
        }
    })
}

export let limitPRegistroDevolucion = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>280){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint RegistroDevolucion'
            })
        }
    })
}

export let limitPRegistroEntrega = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>250){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint RegistroDevolucion'
            })
        }
    })
}

export let limitPReserva = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>290){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Reserva'
            })
        }
    })
}

export let limitDColecciones = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>20){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Demasiadas consultas en un corto periodo de tiempo en el endpoint Alquiler'
            })
        }
    })
}