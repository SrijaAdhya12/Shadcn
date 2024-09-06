// ToastProvider.jsx
import React, { createContext, useContext, useState, useCallback } from 'react'
import { Toast, ToastContainer } from 'shadcn' // Assuming ShadCN has a Toast component

const ToastContext = createContext()

export function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([])

	const showToast = useCallback((message) => {
		const id = Date.now()
		setToasts((prevToasts) => [...prevToasts, { id, message }])

		// Auto-dismiss after 3 seconds
		setTimeout(() => {
			setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
		}, 3000)
	}, [])

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<ToastContainer>
				{toasts.map((toast) => (
					<Toast key={toast.id}>{toast.message}</Toast>
				))}
			</ToastContainer>
		</ToastContext.Provider>
	)
}

export function useToast() {
	return useContext(ToastContext)
}
