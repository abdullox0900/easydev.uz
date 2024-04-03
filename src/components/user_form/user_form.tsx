import { Button, Input, Select } from 'antd'

function UserForm() {
	const { TextArea } = Input

	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}


	return (
		<form className='flex flex-col gap-[20px] pt-[10px]'>
			<div className='text-center text-[24px]'>Taklif</div>
			<Select
				placeholder="Dasturlash tilni tanlang"
				// defaultValue="JavaScript"
				onChange={handleChange}
				size='large'
				options={[
					{ value: 'javascript', label: 'JavaScript' },
					{ value: 'typescript', label: 'TypeScript' },
					{ value: 'python', label: 'Python', disabled: true },
				]}
			/>
			<Input placeholder='Savol' size='large' />
			<TextArea
				showCount
				size='large'
				maxLength={1000}
				placeholder='Savolning javobi'
				style={{ height: 150, resize: 'none' }}
			/>
			<Button size='large'>Yuborish</Button>
		</form>
	)
}
export default UserForm
