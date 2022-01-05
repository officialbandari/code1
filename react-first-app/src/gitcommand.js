import React from 'react'

const gitcommand = () => {
    return (
        <div>
            
it status
git add c
git stash save "saving multiple files"
git stash list
touch 1 2 3
git add 1 2 3
git stash save "123"
git stash list
git status
touch setb-module
git status
git add setb-module
git commit -m "works done for this release"
git stash list
git status
git stash apply 
git stash list
git stash apply (stash id )
git stash list
git stash pop 
git stash pop (stash id)
git stash list
git stash drop
git stash drop(perticular stash id)
git stash list
git stash drop
git stash list

{/* Branching Concept-------> */}

{/* ---------------> */}
touch dummy
git add dummy
git commit -m "sample commit"
touch a b
git add a b
git commit -m "a b file developed by master"
ls
git branch master1(create a new branch)
git branch
git checkout master1(enter in 2 branch0
touch c d
git add c d
git commit -m " c and d developed by master1"
git checkout master
ls
git merge master1
ls
git checkot master1
ls
git remote add origin 9enter url )
git push -u origin master1
        </div>
    )
}

export default gitcommand
