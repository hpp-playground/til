const mainColor = '#89c9f4'

export const styles = {
    title: {
        borderBottom: '1px solid silver',
        color: 'white',
        fontSize: '1em',
        padding: 4
    },
    editor: {
        width: 600 - 24,
        padding: 4,
        font: '1em',
        backgroundColor: '#f0f0ff'
    },
    editorPad: {
        position: 'fixed',
        top: 0,
        width: 600 - 16,
        height: 120,
        backgroundColor: 'white'
    },
    content: {
        margin: 8,
        borderBottom: '1px solid silver'
    },
    avatar: {
        float: 'left',
        width: 120
    },
    ctext: {
        float: 'left',
        width: 430,
        padding: 8
    },
    reblog: {
        backgroundColor: mainColor
    }
}