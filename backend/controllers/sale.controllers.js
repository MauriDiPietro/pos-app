import SaleModel from "../models/sale.model.js";

export const getAllSales = async (req, res)=>{
    try {
        const sales = await SaleModel.findAll();
        res.json(sales)
    } catch (error) {
        res.json({message: error.message})
    }
};

export const getSale = async(req, res)=>{
    try {
        const sale = await SaleModel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(sale)
    } catch (error) {
        res.json({message: error.message})
    }
};

export const createSale = async (req, res)=>{
    try {
        const sale = await SaleModel.create(req.body);
        res.json(sale)
    } catch (error) {
        res.json({message: error.message})
    }
};

export const updateSale = async (req, res)=>{
    try {
        await SaleModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Venta actualizada correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
};

export const deleteSale = async (req, res)=>{
    try {
        await SaleModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Venta eliminada'
        })
    } catch (error) {
        res.json({message: error.message})
    }
};