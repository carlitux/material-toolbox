#!/bin/sh

# first window just neovim
tmux new-session -d -s mcw
tmux send-keys "nvim -S" C-m

tmux new-window -t mcw
tmux send-keys "yarn run dev" C-m

tmux split-window -v -p 50 -t mcw

# Second window will run services and so
tmux select-window -t 1
tmux select-pane -t 1

tmux -2 attach-session -d -t mcw
