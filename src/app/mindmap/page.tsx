'use client';

import React from 'react';
import ReactFlow, {ConnectionLineType, useEdgesState, useNodesState,} from 'reactflow';

import 'reactflow/dist/style.css';
import {getLayoutedElements} from "@/app/mindmap/order";

export default function MindMap({chatResponse}) {
    const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
        chatResponse.nodes,
        chatResponse.edges
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    if (!chatResponse) return;

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
