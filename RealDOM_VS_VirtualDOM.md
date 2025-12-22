RealDom : whole DOM tree gets reRender on minute update on every component even as small as span

react : Act as broker and makes ui for us;

VirtualDOM: multiple copies of dom tree (original) managed by react and on minute update the copies compare with each other and after that with OG DOM tree and just updates the tweak that got changed not the whole tree or you can say makes a new copy of existing tree embedded with new change
