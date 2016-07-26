---
layout: post
title:  "Playing Around with RNNs: Song Lyrics"
date:   2016-07-26 06:33:15 -0700
categories: posts
---
### What is char-rnn?

[char-rnn][char-rnn] is a method of utilizing LTSM Recurrent Neural Networks. I've spent this week playing around with Tensorflow, so I used the [Tensorflow implementation][char-rnn-tf]
so I could learn more while playing with other's code. Recurrent neural networks are very powerful tools (I strongly recommend reading [this blogpost][0] and 
[this blogpost][1], as well as [this Two-Minute-Papers video][2]) for handling text and many, many more things. I decided to let it take a data set of lyrics from my
favorite bands and try generating song lyrics.

---

### Motivation

I have been a musician for a very large portion of my life, but I have always stuggled with writing the lyrics of songs. If I train a neural net to do the heavy lifting,
I would be able to ease that part of song writing.

---

### The First (Hilarious) Attempts

My first run through was pretty bad becuase I created a net with too large of a batch size. I used a batch_size of 55 with 3 layers. It created some jumbled
results that would be very interesting to hear as a song.

The Generated Lyrics:

---

I'm taking, it's will redem on

And we were better air home

We had to know

The end I be gonna lips around, and my hell

I stand nowing for restame enough it

And the places that this all pretty as nark

I look a man struting there? 

Stayed myself into the dark

And it's all so far up down

We're on a reabled up or and so don't least care

What aches your legs wake

But they want me write everything

A bitter

Well shoped away? (I'm paty it all

Befiled all neats out

Oh, and it

That isn't about fo

---

 means nothing

You care that I need some come.

Oh-Ne0 realth when say

Good, I love you

Bick up to the light

He said we were slifth and want above ridi

JAst one to Ase?


Wo believed the sylegore calleds

I'll let it all drong

And she saids that could pretty chain.

we didn't learned up to be pleasen.?

Ah

Oh-oh-oh-oh

Oh-oh-Oh, and

Drink about your 'em of just brass start to me 

Wishown we belonger, you're fred and just like you with me

Gave, be blank out with the world

Well, Clafousce old off some

---

 Gow Goo-hour,

I could wear all the time

I am all god she goes

You know I kept your blue trust

That reserdy get it malrop

Carry your tcownough,

“We'll tring yewfull known

Even feels are aspen your eyes

And if I looked)

I've got a laughthay now

And when the way will gonna connect

The light cuzda blears

Sometite plan no water

Be sexarays against and like a fitted shirt

You just blanketed them who'd settled's away

Dirttapped.

Girl when I hock there time (Cone came or news

While the kids that come 

---

 ano man

And I have to those who your mean

You just don't care but the door

And when she, bye, bye, bye, really for the nag. 

Say about look songs

I'd be good, and og clame it

Well all my swem and said to me

And when you talked up

Like town, tired every right. 

But what the way we still not so I can stuped for us to high

and we're waiting flie.

And year enough your say there

Who Xcom, you throw yourself

Who was it all they stayed out your lovery. 

I just want my home that highwest it's uspares

---

So not the  best thing in the world. The interesting thing is it is using actual words sometimes, and it created a Oh-Oh-Oh that has a tendency to happen in songs.
It probably hasn't seen enough parentheses to know to close its parentheses.

Another interesting trend is how the net has a tendency to start sentences with words like but, say, you, I, etc. which is a common occurrence in the lyrics I fed it.

I will update this post after a bit when I've trained a more effective method.

[char-rnn]: https://github.com/karpathy/char-rnn
[char-rnn-tf]: https://github.com/sherjilozair/char-rnn-tensorflow
[0]: http://colah.github.io/posts/2015-08-Understanding-LSTMs/
[1]: http://karpathy.github.io/2015/05/21/rnn-effectiveness/
[2]: https://youtu.be/Jkkjy7dVdaY?list=PLujxSBD-JXglGL3ERdDOhthD3jTlfudC2