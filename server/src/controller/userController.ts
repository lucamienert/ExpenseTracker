import md5 from "md5"
import db from "../database"

export const getUser = async (req: any, res: any, next: any) => {
    const sql = `select * from user where id = ?`
    const params = [req.params.id]

    db.all(sql, params, (err: Error | null, rows: any[]) => {
        if (err) {
            res.status(400).json({ 'error': err.message })
            return
        }

        res.json({
            'message': 'success',
            'data': rows
        })
    })
}

export const addUser = async (req: any, res: any, next: any) => {
    let errors = []
    if (!req.body.password)
        errors.push("No password specified")

    if (!req.body.email)
        errors.push("No email specified")

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") })
        return
    }

    const data = {
        name: req.body.name,
        email: req.body.email,
        password : md5(req.body.password)
    }

    const sql = `INSERT INTO user (name, email, password) VALUES (?,?,?)`
    const params = [data.name, data.email, data.password]
    
    db.run(sql, params, (err: Error | null, result: any) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }

        res.json({
            "message": "success",
            "data": data,
        })
    })
}

export const deleteUser = async (req: any, res: any, next: any) => {
    const sql = ``
    const params = [req.params.id]

    db.all(sql, params, (err: Error | null, rows: any[]) => {
        if (err) {
            res.status(400).json({ 'error': err.message })
            return
        }

        res.json({ 'message': 'success' })
    })
}

export const resetUser = async (req: any, res: any, next: any) => {
    const sql = ``
    const params = [req.params.id]

    db.all(sql, params, (err: Error | null, rows: any[]) => {
        if (err) {
            res.status(400).json({ 'error': err.message })
            return
        }

        res.json({ 'message': 'success' })
    })
}