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
import { Category } from '../../../../../common/contexts/categoriesContext';
import { useColors } from '../../../../../hooks/useColors';
import { useCategories } from "../../../../../common/hooks/useCategories"
import { useApi } from "../../../../../common/hooks/useApi"
import { useSnackbar } from "burgos-snackbar"

interface CategoryModalProps {
    category?: Category
    open: boolean
    setOpen: (value: boolean) => void
    setCategory: (value: Category | undefined) => void
}

interface formValues {
    name: string
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, open, setOpen, setCategory }) => {
    const [loading, setLoading] = useState(false)

    const colors = useColors()
    const { categories, setCategories } = useCategories()
    const { snackbar } = useSnackbar()
    const isMobile = useMediaQuery("(orientation: portrait)")
    const api = useApi()

    const initialValues: formValues = {
        name: category?.name || "",
    }

    const handleSubmit = (values: formValues) => {
        setLoading(true)
        api.categories.new(
            values,
            (response: { data: Category }) => {
                setCategories([...categories, response.data])
                setOpen(false)
                snackbar({
                    severity: "success",
                    text: "categoria registrada",
                })
            },
            () => null,
            () => setLoading(false)
        )
    }

    const closeModal = () => {
        setOpen(false)
        setCategory(undefined)
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => closeModal()}
                PaperProps={{ style: { width: "100%", backgroundColor: colors.background } }}
                // disableEscapeKeyDown={true}
                // hideBackdrop={true}
            >
                <DialogTitle>Categoria</DialogTitle>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form style={{ display: "contents" }}>
                            <DialogContent sx={{ flexDirection: "column", gap: "2vw" }}>
                                <TextField
                                    label="Nome"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    variant="standard"
                                    autoFocus
                                />
                            </DialogContent>
                            <DialogActions sx={{ justifyContent: "space-evenly", marginBottom: isMobile ? "5vw" : "1vw" }}>
                                <Button variant="outlined" onClick={() => closeModal()}>
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="contained">
                                    {loading ? <CircularProgress size={24} /> : "OK"}
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    )
}