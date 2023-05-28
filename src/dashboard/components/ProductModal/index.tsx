import { DialogTitle, useMediaQuery } from '@mui/material';
import { DialogContent } from '@mui/material';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { DialogActions } from '@mui/material';
import { Dialog } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Product } from '../../../common/contexts/productsContext';
import { useCategories } from '../../../common/hooks/useCategories';
import { useCurrencyMask } from '../../../common/hooks/useCurrencyMask';
import { useProducts } from '../../../common/hooks/useProducts';
import { useColors } from "../../../hooks/useColors"
import { useApi } from "../../../common/hooks/useApi"
import { useSnackbar } from "burgos-snackbar"

interface ProductModalProps {
    product: Product
    open: boolean
    setOpen: (value: boolean) => void
}

interface formValues {
    name: string
    description: string
    price: string
    category: number
    subcategory: number
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, open, setOpen }) => {
    const [loading, setLoading] = useState(false)

    const currencyMask = useCurrencyMask()
    const colors = useColors()
    const { refreshProducts } = useProducts()
    const { categories } = useCategories()
    const { snackbar } = useSnackbar()
    const isMobile = useMediaQuery("(orientation: portrait)")
    const api = useApi()

    const initialValues: formValues = {
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price?.toString().replace(".", ",") || "",
        category: product?.category || 1,
        subcategory: product?.subcategory || 1,
    }

    const handleSubmit = (values: formValues) => {
        api.products.update(
            { ...values, id: product.id },
            (response: { data: Product[] }) => {
                console.log(response.data)
                setOpen(false)
                refreshProducts()
                snackbar({
                    text: `${product.name} atualizado!`,
                    severity: "success",
                })
            },
            (error: any) => console.error(error)
        )
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ style: { width: "100%", backgroundColor: colors.background } }}
                // disableEscapeKeyDown={true}
                // hideBackdrop={true}
            >
                <DialogTitle>Editar produto</DialogTitle>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form style={{ display: "contents" }}>
                            <DialogContent sx={{ flexDirection: "column", gap: "2vw" }}>
                                <TextField
                                    select
                                    id="category"
                                    name="category"
                                    label="Categoria"
                                    onChange={handleChange}
                                    value={values.category}
                                    variant="standard"
                                >
                                    {categories.map((category) => (
                                        <MenuItem key={category.id} value={category.id} style={{ width: "100%" }}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    id="subcategory"
                                    name="subcategory"
                                    label="Sub-categoria"
                                    onChange={handleChange}
                                    value={values.subcategory}
                                >
                                    {categories
                                        .filter((category) => category.id == values.category)[0]
                                        .subcategories.map((subcategory) => (
                                            <MenuItem key={subcategory.id} value={subcategory.id} style={{ width: "100%" }}>
                                                {subcategory.name}
                                            </MenuItem>
                                        ))}
                                </TextField>

                                <TextField
                                    label="Nome"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    variant="standard"
                                />
                                <TextField
                                    label="Descrição"
                                    id="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    variant="standard"
                                />

                                <MaskedInput
                                    mask={currencyMask}
                                    id="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    render={(ref, props) => (
                                        <TextField
                                            inputRef={ref}
                                            {...props}
                                            label="Preço"
                                            variant="standard"
                                            inputProps={{ inputMode: "numeric" }}
                                        />
                                    )}
                                />
                            </DialogContent>
                            <DialogActions sx={{ justifyContent: "space-evenly", marginBottom: isMobile ? "5vw" : "1vw" }}>
                                <Button variant="outlined" onClick={() => setOpen(false)}>
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="contained">
                                    {loading ? <CircularProgress size={24} /> : "Atualizar"}
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    )
}
