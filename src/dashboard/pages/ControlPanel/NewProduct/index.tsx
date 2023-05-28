import { Button } from '@mui/material';
import { MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { useCategories } from '../../../../common/hooks/useCategories';
import { useCurrencyMask } from "../../../../common/hooks/useCurrencyMask"
import "./style.scss"
import { useHeader } from "../../../hooks/useHeader"
import { useApi } from "../../../../common/hooks/useApi"
import { useSnackbar } from "burgos-snackbar"

interface formValues {
    name: string
    description: string
    price: string
    category: number
    subcategory: number
}

export const NewProduct = () => {
    const currencyMask = useCurrencyMask()
    const navigate = useNavigate()
    const { categories } = useCategories()
    const { snackbar } = useSnackbar()
    const header = useHeader()
    const api = useApi()

    const initialValues: formValues = {
        name: "",
        description: "",
        price: "",
        category: 1,
        subcategory: 1,
    }

    const handleSubmit = (values: formValues) => {
        api.products.new(values, () => {
            navigate("/dashboard/panel")
            snackbar({
                text: `${values.name} cadastrado!`,
                severity: "success",
            })
        })
    }

    useEffect(() => {
        header.setTitle("Novo produto")
    }, [])

    return (
        <div className="NewProduct-Component">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField
                            select
                            id="category"
                            name="category"
                            label="Categoria"
                            onChange={handleChange}
                            value={values.category}
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

                        <TextField label="Nome" id="name" value={values.name} onChange={handleChange} required />
                        <TextField
                            label="Descrição"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            required
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
                                    inputProps={{ inputMode: "numeric" }}
                                    required
                                />
                            )}
                        />

                        <Button type="submit" variant="contained">
                            Cadastrar
                        </Button>
                        <Button onClick={() => navigate("/dashboard/panel")} variant="outlined">
                            Cancelar
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
