
import React from 'react';
import { Tree } from 'antd';

const {TreeNode} = Tree;

class TreeDemo extends React.Component {

    state = {
      expandedKeys: [],
    }

    // 接收原本的展开事件，在 state 中记录 expandedKeys
    onExpand = (expandedKeys) => {
      this.setState({ expandedKeys });
    }

    // 接收选中事件，修改 expandedKeys
    onSelect = (selectedKeys) => {
      const { expandedKeys } = this.state;
      const key = selectedKeys[0];

      if (expandedKeys.includes(key)) {
        // 移除 key
        this.setState({
          expandedKeys: expandedKeys.filter(k => k !== key),
        });
      } else {
        // 添加 key
        this.setState({ expandedKeys: [...expandedKeys, key] });
      }
    }

    render() {
        return (
            <Tree
              expandedKeys={this.state.expandedKeys}
              selectedKeys={[]}
              onExpand={this.onExpand}
              onSelect={this.onSelect}
            >
              <TreeNode title="parent 1" key="0-0">
                <TreeNode title="leaf1" key="0-0-0"> 
                    <TreeNode title="leaf11" key="0-0-0-0" />
                    <TreeNode title="leaf12" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="leaf2" key="0-0-1" />
              </TreeNode>
            </Tree>
        );
    }
}

export default TreeDemo;