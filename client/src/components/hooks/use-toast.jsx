export const useToast = ({ title, description, open, onClose }) => {
	return (
		open && (
			<Toast>
				<Toast.Title>{title}</Toast.Title>
				<Toast.Description>{description}</Toast.Description>
				<Toast.Action asChild altText="Close">
					<button onClick={onClose}>Close</button>
				</Toast.Action>
			</Toast>
		)
	)
}
