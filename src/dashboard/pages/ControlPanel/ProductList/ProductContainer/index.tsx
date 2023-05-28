import { Paper } from '@mui/material';
import React from 'react';
import type { Product } from '../../../../../common/contexts/productsContext';
import './style.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { ProductModal } from '../../../../components/ProductModal';
import { useState } from 'react';
import { useColors } from '../../../../../hooks/useColors';
import { useProducts } from "../../../../../common/hooks/useProducts"
import CurrencyFormat from "react-currency-format"
import { CurrencyText } from "../../../../../common/components/CurrencyText"
import { DeleteConfirm } from "./DeleteConfirm"
import { useEffect } from "react"
import { useApi } from "../../../../../common/hooks/useApi"
import { useSnackbar } from "burgos-snackbar"

interface ProductsContainerProps {
    product: Product
}

export const ProductContainer: React.FC<ProductsContainerProps> = ({ product }) => {
    const colors = useColors()
    const { refreshProducts } = useProducts()
    const { snackbar } = useSnackbar()
    const api = useApi()

    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [confirmDeletion, setConfirmDeletion] = useState(false)

    const editProduct = () => {
        setEditModal(true)
    }

    const deleteProduct = () => {
        setDeleteModal(true)
    }

    useEffect(() => {
        if (confirmDeletion) {
            setConfirmDeletion(false)

            api.products.delete(
                product,
                () => {
                    snackbar({
                        text: `produto ${product.name} deletado!`,
                        severity: "warning",
                    })
                },
                () => null,
                () => refreshProducts()
            )
        }
    }, [confirmDeletion])

    return (
        <div className="ProductContainer-Component">
            <Paper elevation={1} className="main-container">
                <div className="info">
                    <p>{product.name}</p>
                    <CurrencyText value={product.price} />
                </div>

                <div className="actions">
                    <IconButton color="primary" onClick={() => editProduct()}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => deleteProduct()}>
                        <DeleteIcon color="error" />
                    </IconButton>
                </div>
            </Paper>
            <ProductModal product={product} open={editModal} setOpen={setEditModal} />
            <DeleteConfirm open={deleteModal} setOpen={setDeleteModal} confirm={setConfirmDeletion} />
        </div>
    )
}