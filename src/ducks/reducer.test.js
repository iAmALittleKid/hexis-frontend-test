import reducer, {setUsername, setRepos, setOrgs} from './reducer'

describe('action creators work', () => {
    it('setUsername should create an action', () => {
        const username = 'randUsername'
        const expectedAction = {
            type: 'SET_USERNAME',
            payload: username
        }
        expect(setUsername(username)).toEqual(expectedAction)
    })
    it('setRepos should create an action', () => {
        const repos = ['hi', 'random', 'person']
        const expectedAction = {
            type: 'SET_REPOS',
            payload: repos
        }
        expect(setRepos(repos)).toEqual(expectedAction)
    })
    it('setOrgs should create an action', () => {
        const orgs = ['org1', 'org2']
        const expectedAction = {
            type: 'SET_ORGS',
            payload: orgs
        }
        expect(setOrgs(orgs)).toEqual(expectedAction)
    })
})

describe('reducer should return the correct state', () => {
    it('returns initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            username: '',
            repos: [],
            orgs: []
        })
    })
    it('handles SET_USERNAME', () => {
        const action = setUsername('randUser')
        expect(reducer(undefined, action)).toEqual({
            username: 'randUser',
            repos: [],
            orgs: []
        })
    })
    it('handles SET_REPOS', () => {
        const action = setRepos(['repo1', 'repo2'])
        expect(reducer(undefined, action)).toEqual({
            username: '',
            repos: ['repo1', 'repo2'],
            orgs: []
        })
    })
    it('handles SET_ORGS', () => {
        const action = setOrgs(['org1', 'org2'])
        expect(reducer(undefined, action)).toEqual({
            username: '',
            repos: [],
            orgs: ['org1', 'org2']
        })
    })
})