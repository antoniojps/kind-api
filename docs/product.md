## Challenges

**HACK FOR GOOD** - Children and youth well-being
**MICROSOFT** - Build The Intelligent Edge with Azure IoT

### Meet Mr kind

Mr Kind came from a distant planet to combat bullying. He becomes very sad when he notices that one child is bad to another. Despite this, he always sees the good in people, so he warns that such attitudes can psychologically hurt the other and suggests a change of approach.

![king-logo](https://github.com/vascosilvaa/Kind/blob/master/src/assets/imgs/kind_intro.png?raw=true)

## What is kind?

Behind a screen we tend to act on impulse and send messages with content that can hurt the feelings of those who receive them. This is called **CyberBullying**.

Both real-world and online bullying can have serious emotional consequences for children. Sometimes CyberBullying can be easy to spot, seeing an answer to a tweet, post on Facebook, comment or photos on Instagram, etc…But it’s not that easy to know if children are suffering CyberBullying on Chat groups, since we can’t see their messages.

**What if bullies had someone who made them rethink their messages before sending them? Would they write things differently?**

Kind acts as a mediator in the conversation between two children. When it detects a message that fits into bullying, will intercept the message and recommend the issuer to reconsider their actions, rewarding the child if he or she acts in a correct way.

We know that some words can have double meanings and the message can be considered offensive and not be. In this way, we will not limit the communication. The bullying message, when sent, even though kind recommend the child not to, can be seen by the recipient but he or she get an alert saying that that message may contain strong words and will only see the message if they want to.

With kind is intended to **reduce the impacts of CyberBullying, raising awareness** of bullies and alerting them to their attitudes. In addition, we aim to **mitigate the victim's suffering** and **report bullying**.

## Technical description

Kind is **Bot As A Service**. It provides an API that allows chat application to intercept users messages and ask kind for analyses and feedback, before delivering the message to the end users. For each message, kind will:

Use his internal AI algorithm to analyze message content and produce a risk assessment supported by a set of sentiments, using Microsoft Cognitive Services with custom made Machine Learning;

Make a decision about the best feedback based on user’s age and the risk assessment for the message, supported by the dataset being built by the team;

Answer the request providing information to be delivered for the final users (sender and receivers), including text and additional resources (photo, video, link,...). Kind can also use a different personality for specific age ranges; provide links to give feedback about false positives and false negatives.

We also provide a Chat As A Service for an easier integration in educational platforms where schools don’t have the required technological skills to use the Kind Bot API.
