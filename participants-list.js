const participantsList = [
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
    {
        name: 'Игорь Щетинский'
    },
    {
        name: 'Kdkj KLJKjknknk'
    },
]

const list = document.getElementById('participants-list');

window.addEventListener('load', () => {
    participantsList.forEach((el, index) => {
        el.id = index;
        const item = document.createElement('li')
        item.innerHTML = el.id + ' ' + el.name
        list.appendChild(item)
    })
})

export {participantsList};