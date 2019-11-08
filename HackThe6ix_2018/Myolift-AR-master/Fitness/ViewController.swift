//
//  ViewController.swift
//  Fitness
//
//  Created by Lizzie Kim on 2018-08-25.
//  Copyright © 2018 Lizzie Kim. All rights reserved.
//
import Foundation
import UIKit
import ARKit
import SceneKit
import SpriteKit
import AVKit



class ViewController: UIViewController {

    @IBOutlet weak var sceneView: ARSCNView!
    @IBOutlet weak var imageview: UIImageView!
    
    var checkButton = false;
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
        let configuration = ARWorldTrackingConfiguration()
        
        configuration.planeDetection = .horizontal
        
        sceneView.session.run(configuration)
        
        /*var cubeNode = SCNNode(geometry: SCNBox(width: 0.1, height: 0.1, length: 0.1, chamferRadius: 0))
        cubeNode.position = SCNVector3(0, 0, -0.2)
        sceneView.scene.rootNode.addChildNode(cubeNode)*/
        
        let scene = SCNScene()
        let sphere = SCNSphere(radius: 0.1)
        let material = SCNMaterial()
        material.diffuse.contents = UIImage(named: "gymball.jpg")
        
        sphere.materials = [material]
        
        let sphereNode = SCNNode(geometry: sphere)
        
        sphereNode.position = SCNVector3(0,0,-0.2)
        sceneView.scene.rootNode.addChildNode(sphereNode)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        let configuration = ARWorldTrackingConfiguration()
        
        sceneView.session.run(configuration)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        let configuration = ARWorldTrackingConfiguration()
        sceneView.session.run(configuration)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    struct cameraCoordinates {
        var x = Float()
        var y = Float()
        var z = Float()
    }
    
    var translation = matrix_identity_float4x4

    
    func view(_ view: ARSKView, nodeFor anchor: ARAnchor) -> SKNode? {
        return SKLabelNode(text: "👾")
    }
    
    @IBAction func getTrainer(_ sender: Any) {
        
        if checkButton == true{
        imageview.loadGif(name: "curls")
            checkButton = false
        }
        checkButton = true
        
    }
    
    @IBAction func ridTrainer(_ sender: Any) {
        imageview.image = nil
        checkButton = false
    }
    
    
    
}
    
    //func getCameraCoordinates(sceneview: ARSCNView) -> cameraCoordinates {
        
   // }




