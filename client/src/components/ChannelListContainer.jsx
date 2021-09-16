import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import UCRIcon from '..assets/ucr.png';

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={UCRIcon} alt="UCR"  width="30"/>
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
    return (
        <div>
            ChannelListContainer
        </div>
    )
}

export default ChannelListContainer
