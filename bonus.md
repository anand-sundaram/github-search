# Bonus Answers

1) Let's say we told you your app needs to search yet another repository, together with Github. What considerations will you make when updating your app?

Ans: 
UI Perspective: 
- Should the user get to choose which site/s to search, or do we search all the project hosting websites we support?
- Should the results of our search across websites be merged when displayed to the user, or separated by site? Or should we let the user choose which view?

These questions are important since we want to offer the user more services without confusing them with too many options, and making their experience more painful even for a simple query.

Code Perspective:
- How similar is the API of the new service we are considering? This will help us choose how best to modularise our code. If the API response structure is the same we could get away with simply abstracting the query url. But if there are many differences then we would have to create a facade that the app's search component talks to, and then let the facade handle the API call and response parsing logic, based on parameters sent by the component.

2) How would your app deal with the GitHub API going down?

Ans: Presently, it is entirely dependent on GitHub's API being live. But one potential solution is using Google Search instead, where we limit the search to `github.com`. The results that Google's search provides is an approximation of the keyword search in GitHub's API. These pages can then be scraped for further details like repo name, owner name, description and the like.

Caching of search results on our server might also help provide limited service during API outages.

3) Did you consider creating a separate branch on your project? What did you do on the other branch?

Ans: I haven't created another branch thus far, since most of the development till now has been linear. But I foresee using a separate branch to get the testing to work, since it might require restructuring the existing code based on the tests, and I would not want to commit those to master unless I am confident that the restructured code works as well as the existing code.

4) Is your app responsive?

Ans: It looked okay (but not great) when I tried it on Chrome's device mode.

5) Why should I use your app, instead of something that's already out there?

Ans: Can't think of any reason why you would want to use any app instead of GitHub itself. Possibly search across other project hosting websites, like BitBucket or Sourceforge (feature not developed yet).