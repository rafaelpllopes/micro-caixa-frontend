import React, { useState, useEffect } from 'react';

const API = 'http://localhost:5000/clientes'

export default function Clientes() {
    return (<>
        <h1 className="text-uppercase text-center">Clientes</h1>
        <section className='row'>
            <div className="col-md-6">
                <ClientesLista />
            </div>
            <div className="col-md-6">
                <ClientesCadastrar />
            </div>
        </section>
    </>
    )
}

export function ClientesCadastrar() {
    const [cliente, setCliente] = useState({})

    return (
        <>
            <h2 className="text-uppercase text-center">Cadastrar</h2>
            <form onSubmit={async function handleAddCliente(e) {
                e.preventDefault()
                const dadosForm = new FormData(e.target)
                setCliente(JSON.stringify({ nome: dadosForm.get('nome') }))
                console.log(cliente)
                let resposta = await fetch(API, { method: 'POST', body: cliente })
            }}> 
                <div className="mb-3">
                    <label for="nome" className="form-label">Nome</label>
                    <input type="text" id="nome" name="nome" className="form-control" aria-describedby="nomeHelp" value={cliente.nome} />
                    <div id="nomeHelp" className="form-text">Digite o nome do cliente.</div>
                </div>
                <button className="btn btn-primary btn-lg" type="submit">Adicionar</button>
            </form>
        </>
    )
}

export function ClientesLista() {
    const [clientes, setClientes] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch(API)
        const data = await response.json()
        setClientes(data)
    }, [])

    return (
        <>
            <h2 className="text-uppercase text-center">Lista</h2>
            <div className="table-responsive">
                <table className="table table-striped ">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Criado</th>
                        <th scope="col">Atualizado</th>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.criado}</td>
                                <td>{cliente.atualizado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}