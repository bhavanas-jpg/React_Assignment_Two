import React from 'react'

const style={
    padding: '12px',
    marginTop: '16px',
    borderRadius: '9px',
    fontSize: '19px'
}

const UserInput =(props) => {
    return (
        <div>
          <input
           type="text" 
           style={style}
            onChange={props.change}
            value={props.currentName} />  
        </div>
    )
}

export default UserInput
