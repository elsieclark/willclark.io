const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../shared/components/break/break.jsx');
const P  = require('../shared/components/paragraph/paragraph.jsx');
const TitleBlock = require('../shared/components/titleblock/titleblock.jsx');


const HomePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='homepage'>

            <TitleBlock name='Arbiter' date='April 19 2017'/>

            <P>
                Normally, effective trading in financial markets revolves around a simple idea: buy low, and sell
                higher. The key, then, is to be able to accurately predict future trends in the market, and whether
                the value of an asset will increase or decrease over time.

                <span className='br' />

                Countless millions of dollars have been spent towards this goal, but even so, the practice of day
                trading is fraught with peril. Markets can remain irrational far longer than most traders can stake
                a position, and are frequently subject to manipulation. Bots which play with large sums of capital
                even run the risk of causing enough of a change in the market that the render themselves ineffective.

                <span className='br' />

                One alternative is a method called arbitrage, which involves making simultaneous trades to turn a
                profit based upon the current, rather than future, state of the market. In a perfect market, or set
                of markets, arbitrage doesn't exist: it exploits the inefficiencies between markets.

                <span className='br' />

                For example, asset ABC is trading in one market for $1.00 and another market for $1.05. If a player
                has a presence in both markets, they can sell ABC in the second market, while buying an equivalent
                quantity of ABC in the first, at a lower price. The end result is that the player ends up with the same
                amount of ABC, but more money: profit.

                <span className='br' />

                There are a number of complicating factors that make this more difficult than it sounds. The player
                needs to own some of the assets in both markets at all times in order to take advantage of these
                opportunities when the arrive. And depending on the markets in question, such opportunities may never
                occur. They require high volatility, but enough liquidity to exist in multiple independent markets,
                as well as a high enough trade volume to minimize the spread. Add to that the difficulty of executing
                two simultaneous trades in different markets, and the possibility of making a loss if only one of them
                fails to go through, and you have a less-than-foolproof strategy.

                <span className='br' />

                In addition, the practice is ultimately self defeating: buying in the first market causes the price to
                rise, while selling in the second lowers it; in effect, bringing both markets back into alignment. In
                fact, this effect is exactly why different markets are in alignment so much of the time.
                
            </P>
        </div>;
    }
});

module.exports = HomePage;
