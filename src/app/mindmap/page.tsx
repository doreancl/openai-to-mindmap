'use client';

import React from 'react';
import ReactFlow, {ConnectionLineType, useEdgesState, useNodesState,} from 'reactflow';

import 'reactflow/dist/style.css';
import {getLayoutElements} from "@/app/mindmap/order";

export default function MindMap(props) {
    const {nodes: layoutNodes, edges: layoutEdges} = getLayoutElements(
        props.chatResponse.nodes,
        props.chatResponse.edges
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

    if (!props.chatResponse) return;

    return (
        <div style={{height: 400, border: "1px solid"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                connectionLineType={ConnectionLineType.SmoothStep}
                fitView
            >
            </ReactFlow>
        </div>
    );
};
