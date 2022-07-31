import NppLogo from './npp-logo.png';
import NdcLogo from './ndc-logo.png';
import CppLogo from './cpp1.jpg';
import PppLogo from './ppp.jpg';
import './App.css';
import React, {useState, useEffect} from 'react'
import TotalVotes from './TotalVotes';

const parties = [
    {
        id: 1,
        partyName: "NPP",
        slogan: "Development in Freedom",
        logo: NppLogo,
        founded: 1992,
        leader: "N.A.D Akufo-Addo"
    },
    {
        id: 2,
        partyName: "NDC",
        slogan: "Unity, Stability and Development",
        logo: NdcLogo,
        founded: 1992,
        leader: "John Dramani Mahama"
    },
    {
        id: 3,
        partyName: "PPP",
        slogan: "Awake",
        logo: PppLogo,
        founded: 2012,
        leader: "Paa Kwesi Nduom"
    },
    {
        id: 4,
        partyName: "CPP",
        slogan: "Forward ever, backward never! Ghana Must Work Again, the CPP is emerging!",
        logo: CppLogo,
        founded: 1949,
        leader: "Unknwon"
    }
]
function App() {
    const [nppVoteCount, setNppVoteCount] = useState(0)
    const [ndcVoteCount, setNdcVoteCount] = useState(0)
    const [pppVoteCount, setPppVoteCount] = useState(0)
    const [cppVoteCount, setCppVoteCount] = useState(0)
    const [nppPercentage, setNppPercentage] = useState(0)
    const [ndcPercentage, setNdcPercentage] = useState(0)
    const [pppPercentage, setPppPercentage] = useState(0)
    const [cppPercentage, setCppPercentage] = useState(0)
    const [voted, setVoted] = useState(false)
    // const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() =>{
        setNppPercentage( nppVoteCount / 100 * 2)
    }, [nppVoteCount, nppPercentage])

    useEffect(() =>{
        setNdcPercentage( ndcVoteCount / 100 * 2)
    }, [ndcVoteCount, ndcPercentage])

    useEffect(() =>{
        setPppPercentage( pppVoteCount / 100 * 2)
    }, [pppVoteCount, pppPercentage])

    useEffect(() =>{
        setCppPercentage( cppVoteCount / 100 * 2)
    }, [cppVoteCount, cppPercentage])

    
    return (
    <div className="App">
        <TotalVotes 
        nppVoteCount={nppVoteCount} 
        ndcVoteCount={ndcVoteCount} 
        pppVoteCount={pppVoteCount} 
        cppVoteCount={cppVoteCount} 
        />

            <div className='modal' id='modal'>
                <div className='modalWrap'>
                    <img src={NdcLogo} alt='' width="350px" height="250px" />
                    <p className='beAware'>Be aware that your decision is unchangable after your voting. And you can only make a change after four(4) years!</p>
                    <h3>ARE YOU SURE THIS IS THE RIGHT VOTE?</h3>
                    <div className='modalBtn'>
                        <button className='greenBtn'
                                onClick={() => 
                                document.getElementById('modal').style.display='none'}>YES</button>
                        <button className='redBtn'
                                onClick={() =>
                                document.getElementById('modal').style.display='none'}>NO</button>
                    </div>
                </div>
            </div>
            <div className='totalVoteCount'>

            </div>
            <div className='voteCountWrap'>
                <h1 className='voteCount'>{nppVoteCount}</h1>
                <h1 className='voteCount'>{ndcVoteCount}</h1>
                <h1 className='voteCount'>{pppVoteCount}</h1>
                <h1 className='voteCount'>{cppVoteCount}</h1>
            </div>
            <div className='percentageCountWrap'>
                <h1 className='percentageCount'>{nppPercentage}</h1>
                <h1 className='percentageCount'>{ndcPercentage}</h1>
                <h1 className='percentageCount'>{pppPercentage}</h1>
                <h1 className='percentageCount'>{cppPercentage}</h1>
            </div>
        <div className='appWrap'>
            {parties.map((party, id)=>{
                return(
                    <div key={id} className='partyCard'>
                        <div className='cardWrap'>
                            <h2 className='partyName'>{party.partyName}</h2>
                            <p className='slogan'>{party.slogan}</p>
                            <img src={party.logo} alt='' width="350px" height="250px" />
                            <div className='partyYearwrap'>
                                <h4 className='yearFounded'>Since: <span>{party.founded}</span></h4>
                                <h4>Flag-bearer: <span>{party.leader}</span></h4>
                                <button
                                disabled={voted}
                                onClick={() => [party.id === 1 ? setNppVoteCount(nppVoteCount + 1) :
                                    party.id === 2 ? setNdcVoteCount(ndcVoteCount + 1) :
                                    party.id === 3 ? setPppVoteCount(pppVoteCount + 1) :
                                                    setCppVoteCount(cppVoteCount + 1),
                                                    setVoted(true),
                                                document.getElementById('modal').style.display='block']}
                                className="voteBtn"
                                >Vote</button>
                                <button
                                disabled={(party.id === 1 && nppVoteCount <= 0 ? true : false) ||
                                          (party.id === 2 && ndcVoteCount <= 0 ? true : false) ||
                                          (party.id === 3 && pppVoteCount <= 0 ? true : false) ||
                                          (party.id === 4 && cppVoteCount <= 0 ? true : false)}
                                onClick={() => [party.id === 1 ? setNppVoteCount(nppVoteCount - 1) :
                                        party.id === 2 ? setNdcVoteCount(ndcVoteCount - 1) :
                                        party.id === 3 ? setPppVoteCount(pppVoteCount - 1) :
                                                        setCppVoteCount(cppVoteCount - 1),
                                                    setVoted(false),]}
                                className="unVoteBtn"
                                >Unvote</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    );
}

export default App;
