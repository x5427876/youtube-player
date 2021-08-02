import react from 'react'

class SearchBar extends react.Component {
    state = { term: '' }

    onInputChange = (e) => {  //設定輸入值同步更新state
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()  //預防送出表單觸發刷新頁面
        this.props.onFormSubmit(this.state.term)  //把目前搜尋列內容傳出搜尋
    }

    render() {
        return (
            <div className='my-8'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='flex'>
                        <img className='mx-6' src='https://api.iconify.design/logos:youtube.svg?height=40' />
                        <input placeholder="搜尋" value={this.state.term}  //顯示目前state值，每次輸入觸發更新state
                            type='text' onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>)
    }
}

export { SearchBar }